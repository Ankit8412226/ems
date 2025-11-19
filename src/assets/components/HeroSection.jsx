import { ArrowRight } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center pt-20">

      {/* Headline */}
      <h1 className="text-5xl md:text-3xl font-poppins font-bold text-gray-900 leading-14">
        Manage your Team, Tasks &
        <br />
        <span className="bg-linear-to-r from-[#C65CF4] to-[#96FFB2] text-transparent bg-clip-text">
          Projects in one place
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 mt-4 max-w-xl">
        Lorem ipsum dolor sit amet consectetur. kshi uenmamet consectetur.
        kshi uenmamet.
      </p>

      {/* CTA Button */}
      <button className="relative mt-8 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#756FCC] text-white shadow-md hover:opacity-90 transition font-poppins font-medium
  before:absolute before:inset-0 before:rounded-xl before:bg-[#96FFB2] before:blur-lg before:opacity-60 before:-z-10
">
        Try for free
        <ArrowRight size={18} />
      </button>

      {/* Dashboard Image Below */}
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
