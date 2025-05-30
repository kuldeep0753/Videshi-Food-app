import { useState, useEffect, useContext } from "react";
import { LOGO_LINK } from "../../utils/constants";
import { Link } from "react-router-dom";
import "./Header.css";
import useOnlineStatus from "../../utils/useOnlineStatus";
import ContextApiHook from "../../utils/ContextApi";

export const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("Log In");
  const onlineStatus = useOnlineStatus(true);

  const { logInUser } = useContext(ContextApiHook);
  console.log(logInUser);

  useEffect(() => {}, []);

  const handleLoginBtn = () => {
    toggleBtn === "Log In" ? setToggleBtn("Log Out") : setToggleBtn("Log In");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={LOGO_LINK} alt="Restaurant Logo" className="logo-image" />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/form">Form</Link>
          </li>
          <li className="nav-item">
            <Link to="/">🧑‍🦲Sign In</Link>
          </li>

          <li className="nav-item">
            <Link to="/grocery">Grocery🍰</Link>
          </li>
          <li className="nav-item status-item">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="nav-item">
            <button className="toggle-btn" onClick={handleLoginBtn}>
              {toggleBtn}
            </button>
          </li>
          <li className="nav-item context-api">{logInUser}</li>
        </ul>
      </nav>
    </header>
  );
};
