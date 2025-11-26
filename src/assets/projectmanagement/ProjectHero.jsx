import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectHero() {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate("/auth?mode=login");  // redirect to login
  };

  return (
    <section className="flex flex-col items-center text-center pt-20 relative px-4">

      {/* Background Shape */}
      <img
        src="/Ellipse 492 (1).svg"
        alt="bg-shape"
        className="absolute top-[170px] left-[200px] rotate-90 -z-9"
      />

      {/* Headline */}
      <h1 className="text-5xl md:text-5xl font-poppins font-semibold text-gray-900 leading-14">
        Deliver Projects Faster With
        <br />
        Powerful Project{" "}
         <span className="bg-linear-to-r from-[#C65CF4] to-[#96FFB2] text-transparent bg-clip-text inline">
           Management
          <span className="block bg-linear-to-r from-[#C65CF4] to-[#96FFB2] text-transparent bg-clip-text">
          Tools
          </span>
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 mt-4 max-w-xl">
        Manage tasks, teams, timelines, and profitability—all in one place.
      </p>

      {/* CTA Button */}
      <button
        onClick={handleCTA}
        className="relative mt-8 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#756FCC] text-white shadow-md hover:opacity-90 transition font-poppins font-medium"
      >
        Try for free
        <ArrowRight size={18} />
      </button>

      {/* Dashboard Image */}
      <div className="mt-2 max-w-6xl w-full px-4 pt-0">
        <img
          src="/Dash.png"
          alt="Dashboard preview"
          className="w-full rounded-3xl"
        />
      </div>

    </section>
  );
}
