import CompanyLogo from "./components/CompanyLogo/CompanyLogo";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navber/navber";
import QuickLook from "./components/QuickLook/QuickLook";
import Talents from "./components/Talents/Talents";
import Teams from "./components/Teams/Teams";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <Talents />
      <Teams />
      <QuickLook />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
