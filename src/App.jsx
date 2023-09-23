import "./App.css";
import { NavBar } from "./Component/Nav Bar/NavBar.jsx";
import { Phones } from "./Component/Phones/Phones.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className={"mb-16"}></div>
      <Outlet />
      <div className={"mt-16"}></div>
    </>
  );
}

export default App;
