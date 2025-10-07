// src/App.jsx
import Navbar from "./components/NavBar";
import HeroSection from "./pages/HeroSection";
import RoadmapSection from "./pages/RoadMapSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen ">
      <Navbar brand="Learning Roadmap" ctaLabel="Comenzar" />
      <main className="pt-28" id="inicio">
        <HeroSection />

        <section id="roadmap">
          <RoadmapSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
