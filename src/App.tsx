import Navbar from "./components/Navbar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Reservation from "./sections/Reservation";

function App() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  );
}

export default App;