import "./App.css";
import { MdOutlineTranslate } from "react-icons/md";

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
            <select name="languages" id="languages">
              <option value="English">
                <MdOutlineTranslate />
                English
              </option>
              <option value="العربية">العربية</option>
              <option value="Français">Français</option>
            </select>
            <button className="sign-in-btn">sign in</button>
          </div>
        </nav>
        <article>
          <h1>unlimited movies, TV shows and more</h1>
          <p>whatch anywhere. cancel anytime</p>
          <h3>
            reday to watch? enter your email to create or restart your
            membership
          </h3>
          <form>
            <input type="email" />
            <button type="submit">get started</button>
          </form>
        </article>
      </section>
      {/* divider */}
      <div className="divider"></div>
    </main>
  );
}

export default App;
