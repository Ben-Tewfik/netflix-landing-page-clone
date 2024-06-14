import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <article className="hero-text">
          <h1>unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <div className="description-form-container">
            <p>
              Ready to watch? Enter your email or mobile number to create or
              restart your membership.
            </p>
            <form className="form-container">
              <div className="input-wrapper">
                <input
                  type="email"
                  className="email-input"
                  id="email"
                  required
                />
                <label htmlFor="email" className="email-label">
                  Email or mobile number
                </label>
              </div>
              <button type="submit" className="get-started-btn">
                <span>get started</span>
                <RiArrowRightSLine className="arrow-icon" />
              </button>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
}
