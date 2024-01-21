import "./App.css";

function App() {
  return (
    <main>
      <section className="hero">
        <nav>
          <img src="/netflixlogo.png" alt="logo" className="logo" />
          <select name="" id=""></select>
          <button>sign in</button>
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
    </main>
  );
}

export default App;
