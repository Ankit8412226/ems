import React from 'react';

export const Button = ({ text, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-full bg-gradient-to-r from-[#7D1EDB] to-[#7D1EDB] text-white py-3 rounded-lg font-medium hover:from-[#6b18c3] hover:to-[#5810a9] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {text}
  </button>
);
