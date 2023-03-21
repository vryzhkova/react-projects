import userContext from "../context/UserContext";
import { useContext } from "react";

function ChangeUser() {
  const { user, setUser } = useContext(userContext);

  return (
    <button onClick={() => setUser(user === "Vika" ? "Alice" : "Vika")}>
      Change User
    </button>
  );
}

export default ChangeUser;
