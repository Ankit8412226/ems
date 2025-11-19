import { Navigate, BrowserRouter as Router } from "react-router-dom";
import Attendnce from "./assets/components/Attendence";
import Customers from "./assets/components/Customers";
import FeaturesSection from "./assets/components/FeaturesSection";
import Finance from "./assets/components/Finance";
import Footer from "./assets/components/Footer";
import HeroSection from "./assets/components/HeroSection";
import HowitWorks from "./assets/components/howitWorks";
import IntegrationSection from "./assets/components/IntegrationSection";
import Navbar from "./assets/components/Navbar";
import PricingSection from "./assets/components/Price";
import Profitablity from "./assets/components/Profitably";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {


  return (
<Router>
  <div className="relative min-h-screen w-full">

    {/* Background image for entire page */}
    <div className="fixed inset-0 -z-10">
      <img
        src="/Grid_bg.svg"
        alt="grid background"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content wrapper */}
    <div className="pt-20 ">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowitWorks/>
      <Finance/>
      <Attendnce />
      <Profitablity />
      <Customers />
      <PricingSection />
      <IntegrationSection />
      <Footer/>
    </div>

  </div>
</Router>

  );
}

export default App;
