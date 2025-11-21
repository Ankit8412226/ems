import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsUseCasesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-8
        z-50 bg-white/20 backdrop-blur-lg border-b border-white/10">

      {/* Logo */}
      <div className="flex items-center gap-2 z-20">
        <img src="/Orga Logo (1).svg" alt="Logo" className="h-8" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-[#292D34] font-medium">

        {/* Use Cases Dropdown */}
        <div className="relative group" ref={dropdownRef}>
          <button
            onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
            className="flex items-center gap-1 cursor-pointer hover:text-[#756FCC] transition"
          >
            Use Cases
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isUseCasesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isUseCasesOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-56 py-3 z-50 border border-gray-100">
              <a className="block px-4 py-2 hover:text-[#756FCC] cursor-pointer">Project Management</a>
              <a className="block px-4 py-2 hover:text-[#756FCC] cursor-pointer">HRMS</a>
              <a className="block px-4 py-2 hover:text-[#756FCC] cursor-pointer">Support</a>
              <a className="block px-4 py-2 hover:text-[#756FCC] cursor-pointer">Finance Management</a>
            </div>
          )}
        </div>

        {/* Solutions */}
        <div className="flex items-center gap-1 cursor-pointer text-[#292D34] hover:text-[#756FCC] transition">
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
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out h-screen ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="flex flex-col px-8 py-6 space-y-4">

          {/* Mobile Use Cases Dropdown */}
          <div className="border-b border-gray-100 pb-2">
            <details className="group">
              <summary
                className="flex items-center justify-between cursor-pointer text-[#292D34] 
                hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC] transition py-2"
              >
                Use Cases
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              {/* Styled dropdown to match desktop */}
              <div className="mt-2 bg-white shadow-md rounded-lg border border-gray-100 py-2">
                <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC]">
                  Project Management
                </div>

                <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC]">
                  HRMS
                </div>

                <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC]">
                  Support
                </div>

                <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC]">
                  Finance Management
                </div>

              </div>
            </details>
          </div>

          {/* Mobile Solutions */}
          <div className="border-b border-gray-100 pb-2">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer text-[#292D34] 
                hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC] transition py-2">
                Solutions
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
            </details>
          </div>

          <div className=" flex items-center justify-between border-b border-gray-100 cursor-pointer text-[#292D34] 
                hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC] transition  py-2">How it works</div>
          <div className=" flex items-center justify-between border-b border-gray-100 cursor-pointer text-[#292D34] 
                hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC] transition  py-2">Pricing</div>
          <div className=" flex items-center justify-between border-b border-gray-100 cursor-pointer text-[#292D34] 
                hover:text-[#756FCC] active:text-[#756FCC] focus:text-[#756FCC] transition  py-2">Book a Demo</div>

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
