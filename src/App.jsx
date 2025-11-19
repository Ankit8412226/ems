import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./assets/pages/AuthPage";
import EmployeeDirectory from "./assets/pages/EmployeeDirectory";
import Navbar from "./assets/components/Navbar"; 
import HeroSection from "./assets/components/HeroSection";
import FeaturesSection from "./assets/components/FeaturesSection";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>

      {/* Navbar should be OUTSIDE Routes */}
      <Navbar /> 
      <HeroSection />
      <FeaturesSection />

      {/* <Routes>
        {/* Public Route 
        <Route path="/" element={<AuthPage />} />

        {/* Protected Route 
        <Route
          path="/employee"
          element={
            <ProtectedRoute>
              <EmployeeDirectory />
            </ProtectedRoute>
          }
        />

      </Routes> */}
    </Router>
  );
}

export default App;
