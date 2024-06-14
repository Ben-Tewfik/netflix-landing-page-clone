import "./App.css";
import Faq from "./components/Faq/Faq";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* divider */}
      <div className="divider"></div>
      {/* faq component */}
      <Faq />
      {/* end of faq component */}
    </main>
  );
}

export default App;
