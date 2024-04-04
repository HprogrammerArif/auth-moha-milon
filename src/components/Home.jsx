import { useContext } from "react";
import { AuthContex } from "../providers/AuthProvider";

const Home = () => {

  const authInfo = useContext(AuthContex)
  console.log(authInfo);

  return (
    <div>
      <h2 className="text-3xl">This is home for: {authInfo.name}</h2>
    </div>
  );
};

export default Home;