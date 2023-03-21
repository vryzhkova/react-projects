import { useState } from "react";
import "./App.css";
import User from "./components/User";
import userContext from "./context/UserContext";
import ChangeUser from "./components/ChangeUser";

function App() {
  const [user, setUser] = useState("Vika");

  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </userContext.Provider>
  );
}

export default App;
