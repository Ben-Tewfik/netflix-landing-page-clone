import "./App.css";
import { RiArrowRightSLine } from "react-icons/ri";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <main>
      <section className="hero">
        <nav className="navbar">
          <div className="logo-container">
            <img src="/netflix_logo.svg" alt="logo" className="logo" />
          </div>
          {/* sign in and language container */}
          <div className="sign-in-container">
            <select name="languages" id="languages" foc>
              <option value="english">english</option>
              <option value="العربية">العربية</option>
              <option value="Français">Français</option>
            </select>
            <button className="sign-in-btn">sign in</button>
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
