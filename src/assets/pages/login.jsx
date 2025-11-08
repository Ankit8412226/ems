import React, { useState } from "react";

const Login = () => {
  const [step, setStep] = useState("login"); // login | forgot | reset

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg.svg')", // ✅ Make sure this is in public/
      }}
    >
      {/* Decorative Background Shapes */}
      <img
        src="/shape1.png"
        alt="decor shape 1"
        className="absolute bottom-10 left-10 w-24 md:w-32 opacity-90"
      />
      <img
        src="/shape2.png"
        alt="decor shape 2"
        className="absolute top-10 right-10 w-24 md:w-32 opacity-80"
      />

      {/* Main Auth Card */}
      <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-2xl w-[90%] max-w-md p-8 relative z-10">
        {/* Logo & Title Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-3">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>

          {step === "login" && (
            <>
              <h2 className="text-2xl font-semibold text-gray-800">
                Welcome to Orga
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Please log in to your account
              </p>
            </>
          )}

          {step === "forgot" && (
            <>
              <h2 className="text-2xl font-semibold text-gray-800">
                Forgot Your Password?
              </h2>
              <p className="text-sm text-gray-500 text-center mt-1">
                A link will be sent to your mail to help you reset your password.
              </p>
            </>
          )}

          {step === "reset" && (
            <>
              <h2 className="text-2xl font-semibold text-gray-800">
                Reset your Password
              </h2>
              <p className="text-sm text-gray-500 mt-1">Set a new password</p>
            </>
          )}
        </div>

        {/* LOGIN FORM */}
        {step === "login" && (
          <form className="flex flex-col space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="button"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
            >
              Log in
            </button>

            <p
              onClick={() => setStep("forgot")}
              className="text-sm text-purple-600 text-center cursor-pointer hover:underline"
            >
              Forgot password?
            </p>
          </form>
        )}

        {/* FORGOT PASSWORD FORM */}
        {step === "forgot" && (
          <form className="flex flex-col space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="button"
              onClick={() => setStep("reset")}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
            >
              Get Link
            </button>

            <p
              onClick={() => setStep("login")}
              className="text-sm text-purple-600 text-center cursor-pointer hover:underline"
            >
              Back to Login
            </p>
          </form>
        )}

        {/* RESET PASSWORD FORM */}
        {step === "reset" && (
          <form className="flex flex-col space-y-4">
            <div>
              <label className="text-sm text-gray-600">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Re-enter Password</label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="button"
              onClick={() => setStep("login")}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        )}

        <p className="text-[11px] text-gray-400 text-center mt-6">
          Secure login powered by encrypted authentication
        </p>
      </div>
    </div>
  );
};

export default Login;
