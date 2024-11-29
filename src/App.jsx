import CompanyLogo from "./components/CompanyLogo/CompanyLogo";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navber/navber";
import QuickLook from "./components/QuickLook/QuickLook";
import Talents from "./components/Talents/Talents";
import Teams from "./components/Teams/Teams";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyRemote from "./components/WhyRemote/WhyRemote";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <Talents />
      <Teams />
      <QuickLook />
      <WhyRemote />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
