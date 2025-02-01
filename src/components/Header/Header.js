import { LOGO_LINK } from "../../utils/constants";

export  const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };