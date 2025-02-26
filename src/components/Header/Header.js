import { useState } from "react";
import { LOGO_LINK } from "../../utils/constants";


export  const Header = () => {
  const [toggleBtn,setToggleBtn] = useState("Log In")
  
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