import { useState, useEffect} from "react";
import { LOGO_LINK } from "../../utils/constants";
import { Link } from "react-router-dom";
import "./Header.css";
import useOnlineStatus from "../../utils/useOnlineStatus";


export  const Header = () => {
  /**TODO:Never declare any hooks under condition and looping and outside the higher function */
  const [toggleBtn,setToggleBtn] = useState("Log In");
  const onlineStatus = useOnlineStatus(true);

  /**Initially it is call atleast once
   * if no dependency ==> then render every time
   * if dependency with empty array ==> called once
   * if dependency on any value ==> then render when changes happen
   */
  useEffect(()=>{
    // console.log("I am rendering on condition😎")
  },[]);
  // TOggle Login LogOut
  const handleLoginBtn = ()=>{
    toggleBtn == "Log In"? setToggleBtn("Log Out"): setToggleBtn("Log In");
  }
    return (
      <div className="header">
        <div className="restro-image">
          <img src={LOGO_LINK} alt="not loading" />
        </div>
        <div className="nav-link">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>            
            <li><Link to="/form">Form</Link></li>            
            <li><Link to="/">🧑‍🦲Sign In</Link></li>
            <li><Link to="/grocery">Grocery🍰</Link></li>
            <li><Link to="/">Staus:{onlineStatus?"🟢":"🔴"}</Link></li>
            <li><button className="toggleBtn" onClick={handleLoginBtn}>{toggleBtn}</button></li>
          </ul>
        </div>
      </div>
    );
  };