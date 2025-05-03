import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
