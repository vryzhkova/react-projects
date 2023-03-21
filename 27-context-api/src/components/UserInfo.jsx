import userContext from "../context/UserContext";
import { useContext } from "react";

function UserInfo() {
  const { user } = useContext(userContext);

  return <h1>{user}</h1>;
}

export default UserInfo;
