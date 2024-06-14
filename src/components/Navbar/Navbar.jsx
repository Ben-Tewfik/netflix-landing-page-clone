import LanguageDropDown from "../LanguageDropDown/LanguageDropDown";
import logo from "../../assets/netflix_logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        {/* logo */}
        <img src={logo} alt="logo" className="logo" />
        {/* sign in and language container */}
        <div className="nav-buttons-container">
          <LanguageDropDown />
          <button className="sign-in-btn">sign in</button>
        </div>
      </div>
    </nav>
  );
}
