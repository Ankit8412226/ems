import React, { useState } from 'react';
import { Button } from './Button';

export const ResetPasswordForm = ({ onSubmit, onBack }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      onSubmit(newPassword);
    }
  };

  return (
    <div className="w-full min-w-md bg-white rounded-2xl shadow-xl p-10">
      {/* 🔹 Same Logo as Login Form */}
      <div className="flex justify-center mb-6">
        <img
          src="/Orga Logo.svg"   // same logo path
          alt="Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold text-center mb-2">
        Reset your Password
      </h1>
      <p className="text-gray-500 text-center mb-6">
        Set a new password
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          New Password
        </label>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Re-enter Password
        </label>
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <Button
          text="Submit"
          onClick={handleSubmit}
          disabled={
            !newPassword ||
            !confirmPassword ||
            newPassword !== confirmPassword
          }
        />
      </div>

      <button
        onClick={onBack}
        className="w-full text-center text-gray-600 hover:text-purple-600 transition-colors underline"
      >
        Back to Login
      </button>
    </div>
  );
};
