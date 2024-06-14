import "./App.css";
import { RiArrowRightSLine } from "react-icons/ri";
import Faq from "./components/Faq/Faq";
import logo from "./assets/netflix_logo.svg";
import LanguageDropDown from "./components/LanguageDropDown/LanguageDropDown";

function App() {
  return (
    <main>
      <section className="hero">
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
        <article className="hero-text">
          <h1>unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <form>
            <div className="input-wrapper">
              <input type="email" className="email-input" id="email" required />
              <label htmlFor="email" className="email-label">
                Email address
              </label>
            </div>
            <button type="submit" className="get-started-btn">
              <span>get started</span>
              <RiArrowRightSLine className="arrow-icon" />
            </button>
          </form>
        </article>
      </section>
      {/* divider */}
      <div className="divider"></div>
      {/* faq component */}
      <Faq />
      {/* end of faq component */}
    </main>
  );
}

export default App;
