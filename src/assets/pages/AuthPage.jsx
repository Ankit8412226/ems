import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/authentication/LoginForm";
import { ForgotPasswordForm } from "../components/authentication/ForgotPasswordForm";
import { ResetPasswordForm } from "../components/authentication/ResetPasswordForm";
import { Button } from "../components/authentication/Button";

const AuthPage = () => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    showForgotPassword: false,
    showResetPassword: false,
    user: null,
  });

  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    console.log("Login attempt:", { email, password });
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    setAuthState({
      isLoggedIn: true,
      showForgotPassword: false,
      showResetPassword: false,
      user: { email },
    });
    navigate("/employee"); 
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setAuthState({
      isLoggedIn: false,
      showForgotPassword: false,
      showResetPassword: false,
      user: null,
    });
    navigate("/"); 
  };

  const handleForgotPassword = () => {
    setAuthState({
      ...authState,
      showForgotPassword: true,
      showResetPassword: false,
    });
  };

  const handleGetLink = (email) => {
    console.log("Reset link sent to:", email);
    setAuthState({
      ...authState,
      showForgotPassword: false,
      showResetPassword: true,
    });
  };

  const handleResetPassword = (newPassword) => {
    console.log("Password reset successful");
    setAuthState({
      isLoggedIn: false,
      showForgotPassword: false,
      showResetPassword: false,
      user: null,
    });
  };

  const handleBackToLogin = () => {
    setAuthState({
      isLoggedIn: false,
      showForgotPassword: false,
      showResetPassword: false,
      user: null,
    });
  };

  const renderContent = () => {
    if (authState.isLoggedIn) {
      return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-6">
            You are now logged in as {authState.user?.email}
          </p>
          <Button text="Logout" onClick={handleLogout} />
        </div>
      );
    }

    if (authState.showResetPassword) {
      return (
        <ResetPasswordForm
          onSubmit={handleResetPassword}
          onBack={handleBackToLogin}
        />
      );
    }

    if (authState.showForgotPassword) {
      return (
        <ForgotPasswordForm
          onGetLink={handleGetLink}
          onBack={handleBackToLogin}
        />
      );
    }

    return (
      <LoginForm
        onForgotPassword={handleForgotPassword}
        onLogin={handleLogin}
      />
    );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 pt-20 overflow-hidden bg-gradient-to-br from-[#a8c0ff] via-[#e0c3fc] to-[#f9f9ff]">
      {/* Background Elements */}
      <img src="/bg.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      <img src="/Arrow_Graphic elements.svg" className="absolute bottom-1 left-8 w-100 h-100 object-contain opacity-90" />
      <img src="/Graphic elements.svg" alt="Circle" className="absolute top-[10px] right-[450px] w-[240px] h-[240px] object-contain opacity-90 z-0" />
      <img src="/Graphic elements (1).svg" alt="Circle" className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] object-contain opacity-90" />

      <div className="relative z-10">
        {renderContent()}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Secure login powered by encrypted authentication
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
