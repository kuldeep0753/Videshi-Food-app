import { useState, useEffect} from "react";
import { LOGO_LINK } from "../../utils/constants";


export  const Header = () => {
  /**TODO:Never declare any hooks under condition and looping and outside the higher function */
  const [toggleBtn,setToggleBtn] = useState("Log In")

  /**Initially it is call atleast once
   * if no dependency ==> then render every time
   * if dependency with empty array ==> called once
   * if dependency on any value ==> then render when changes happen
   */
  useEffect(()=>{console.log("I am rendering on condition😎")},[]);
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
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Support</li>
            <li><button className="toggleBtn" onClick={handleLoginBtn}>{toggleBtn}</button></li>
          </ul>
        </div>
      </div>
    );
  };