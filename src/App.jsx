import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./assets/pages/AuthPage";
import EmployeeDirectory from "./assets/pages/EmployeeDirectory";

// ✅ Protected Route component
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<AuthPage />} />

        {/* Protected Route */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <EmployeeDirectory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
