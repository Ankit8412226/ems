import React, { useState } from "react";
import { Menu, ChevronDown, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-8 bg-white z-50 shadow-sm">
      
      {/* Background Grid Image */}
      <div className="absolute inset-0 -z-8">
        <img
          src="/Grid_bg.svg"
          alt="grid background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2 z-20">
        <img src="/Orga Logo (1).svg" alt="Logo" className="h-8" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

        <div className="flex items-center gap-1 cursor-pointer hover:text-[#756FCC] transition">
          Use Cases <ChevronDown size={16} />
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-[#756FCC] transition">
          Solutions <ChevronDown size={16} />
        </div>

        <div className="cursor-pointer hover:text-[#756FCC] transition">How it works</div>
        <div className="cursor-pointer hover:text-[#756FCC] transition">Pricing</div>
        <div className="cursor-pointer hover:text-[#756FCC] transition">Book a Demo</div>

      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-5 py-2 rounded-lg bg-[#756FCC] text-white shadow-sm hover:opacity-90 transition">
          Login
        </button>

        <button className="px-5 py-2 rounded-lg border border-[#756FCC] text-[#756FCC] hover:bg-[#756FCC] hover:text-white transition">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-all duration-300 z-20"
      >
        {isMenuOpen ? (
          <X size={24} className="transition-transform duration-300" />
        ) : (
          <Menu size={24} className="transition-transform duration-300" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-8 py-6 space-y-4">
          
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#756FCC] transition py-2 border-b border-gray-100">
            Use Cases <ChevronDown size={16} />
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#756FCC] transition py-2 border-b border-gray-100">
            Solutions <ChevronDown size={16} />
          </div>

          <div className="cursor-pointer hover:text-[#756FCC] transition py-2 border-b border-gray-100">
            How it works
          </div>

          <div className="cursor-pointer hover:text-[#756FCC] transition py-2 border-b border-gray-100">
            Pricing
          </div>

          <div className="cursor-pointer hover:text-[#756FCC] transition py-2 border-b border-gray-100">
            Book a Demo
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full px-5 py-3 rounded-lg bg-[#756FCC] text-white shadow-sm hover:opacity-90 transition">
              Login
            </button>

            <button className="w-full px-5 py-3 rounded-lg border border-[#756FCC] text-[#756FCC] hover:bg-[#756FCC] hover:text-white transition">
              Get Started
            </button>
          </div>

        </div>
      </div>

    </nav>
  );
}