import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import FreeTrialSection from "./assets/components/FreeTrialSection";
import TestimonialsSection from "./assets/components/TestimonialsSection";
import ProjectHero from "./assets/projectmanagement/ProjectHero";
import ProjectFeature from "./assets/projectmanagement/ProjectFeature";
import ProjectHowitWorks from "./assets/projectmanagement/ProjecthowitWorks";
import ProjectFinance from "./assets/projectmanagement/ProjectFinance";
import ProjectAttendence from "./assets/projectmanagement/ProjectAttendence";
import ProjectProfitable from "./assets/projectmanagement/ProjectProfitable";
import ProjectBusiness from "./assets/projectmanagement/ProjectBusiness";
import ProjectFreeTrialSection from "./assets/projectmanagement/ProjectFreeTrialSection";
import FinanceHero from "./assets/financemgmt/FinanceHero";
import HRMSHero from "./assets/hrms/HrmsHero";
import SupportHero from "./assets/support/SupportHero";
import Demo from "./assets/demos/Demo";
import AuthPage from "./assets/pages/AuthPage";
import SolutionsPage from "./assets/solutions/SolutionsPage";
import ScrollToTop from "./assets/components/ScrollToTop";


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/auth"
          element={
            <div className="relative min-h-screen w-full overflow-x-hidden">
              <AuthPage />
            </div>
          }
        />
        <Route
          path="/solutions"
          element={
            <div className="relative min-h-screen w-full overflow-x-hidden">

              <div className="pt-0">
                <SolutionsPage />
                <Footer />
              </div>
              
            </div>
          }
        />

        {/* ===========================
            HOME PAGE ROUTE
        ============================ */}
        <Route
          path="/"
          element={
            <div className="relative min-h-screen w-full overflow-x-hidden">

              {/* Background */}
              <div className="fixed inset-0 -z-10">
                <img
                  src="/Grid_bg.svg"
                  alt="grid background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-20">
                <Navbar />
                <HeroSection />
                <FeaturesSection />
                <HowitWorks />
                <Finance />
                <Attendnce />
                <Profitablity />
                <Customers />
                <PricingSection />
                <IntegrationSection />
                <FreeTrialSection />
                <TestimonialsSection />
                <Footer />
              </div>

            </div>
          }
        />

        {/* ===========================
            PROJECT MANAGEMENT PAGE
        ============================ */}
        <Route
          path="/project-management"
          element={
            <div className="relative min-h-screen w-full overflow-x-hidden">

              {/* Background */}
              <div className="fixed inset-0 -z-10">
                <img
                  src="/Grid_bg.svg"
                  alt="grid background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-20">
                <Navbar />
                <ProjectHero />
                <ProjectFeature />
                <ProjectHowitWorks />
                <ProjectFinance />
                <ProjectAttendence />
                <ProjectProfitable />
                <ProjectBusiness />
                <ProjectFreeTrialSection />
                <Footer />
              </div>

            </div>
          }
        />
        {/* ===========================
            FINANCE MANAGEMENT PAGE
        ============================ */}
        <Route
          path="/finance-mgmt"
          element={
            <div className="relative min-h-screen w-full overflow-x-hidden">

              {/* Background */}
              <div className="fixed inset-0 -z-10">
                <img
                  src="/Grid_bg.svg"
                  alt="grid background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-20">
                <Navbar />
                <FinanceHero />
                <ProjectFeature />
                <ProjectHowitWorks />
                <ProjectFinance />
                <ProjectAttendence />
                <ProjectProfitable />
                <ProjectBusiness />
                <ProjectFreeTrialSection />
                <Footer />
              </div>

            </div>
          }
        />

        {/* ===========================
            Hrms PAGE
        ============================ */}
        <Route
          path="/hrms"
          element={
            <div className="relative min-h-screen w-full overflow-x-hidden">

              {/* Background */}
              <div className="fixed inset-0 -z-10">
                <img
                  src="/Grid_bg.svg"
                  alt="grid background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-20">
                <Navbar />
                <HRMSHero />
                <ProjectFeature />
                <ProjectHowitWorks />
                <ProjectFinance />
                <ProjectAttendence />
                <ProjectProfitable />
                <ProjectBusiness />
                <ProjectFreeTrialSection />
                <Footer />
              </div>

            </div>
          }
        />
        {/* ===========================
            Hrms PAGE
        ============================ */}
        <Route
          path="/support"
          element={
            <div className="relative min-h-screen w-full overflow-x-hidden">

              {/* Background */}
              <div className="fixed inset-0 -z-10">
                <img
                  src="/Grid_bg.svg"
                  alt="grid background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-20">
                <Navbar />
                <SupportHero />
                <ProjectFeature />
                <ProjectHowitWorks />
                <ProjectFinance />
                <ProjectAttendence />
                <ProjectProfitable />
                <ProjectBusiness />
                <ProjectFreeTrialSection />
                <Footer />
              </div>

            </div>
          }
        />
        <Route
          path="/demo"
          element={
            <div className="relative min-h-screen w-full overflow-x-hidden">
              <div className="fixed inset-0 -z-10">
                <img
                  src="/Grid_bg.svg"
                  alt="grid background"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-20">
                <Navbar />
                <Demo />
                <Footer />
              </div>
            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
