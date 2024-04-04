import { useContext } from "react";
import { AuthContex } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivetRoutes = ({children}) => {

  const {user, loading} = useContext(AuthContex);
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>
  }
  
  
  if (user) {
    return children;
  }

  return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
  children: PropTypes.node,
};