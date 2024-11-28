import CompanyLogo from "./components/CompanyLogo/CompanyLogo";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navber/navber";
import Talents from "./components/Talents/Talents";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <Talents />
      <Teams />
    </>
  );
}

export default App;
