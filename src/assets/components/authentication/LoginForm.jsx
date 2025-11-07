import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { InputField } from './InputField';
import { Button } from './Button';

export const LoginForm = ({ onForgotPassword, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email && password) {
      onLogin(email, password);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white"></div>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-2">Welcome to Orga</h1>
      <p className="text-gray-500 text-center mb-6">Please Log in to your account</p>

      <InputField
        type="email"
        placeholder="Value"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={Mail}
      />

      <InputField
        type="password"
        placeholder="Value"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={Lock}
      />

      <div className="mb-6">
        <Button text="Log in" onClick={handleSubmit} disabled={!email || !password} />
      </div>

      <button
        onClick={onForgotPassword}
        className="w-full text-center text-gray-600 hover:text-purple-600 transition-colors underline"
      >
        Forgot password?
      </button>
    </div>
  );
};