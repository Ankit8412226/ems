import { Navigate, BrowserRouter as Router } from "react-router-dom";
import FeaturesSection from "./assets/components/FeaturesSection";
import Finance from "./assets/components/Finance";
import HeroSection from "./assets/components/HeroSection";
import Navbar from "./assets/components/Navbar";
import HowitWorks from "./assets/components/howitWorks";

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
    </div>

  </div>
</Router>

  );
}

export default App;
