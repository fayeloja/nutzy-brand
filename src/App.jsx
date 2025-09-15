import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
