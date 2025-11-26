import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    { title: "Starter", price: "$29" },
    { title: "Growth", price: "$99" },
    { title: "Pro", price: "$180" },
  ];

  const features = [
    "Enhanced Analytics",
    "Custom Domain",
    "E-commerce Integration",
    "Priority Support",
    "Advanced Security",
  ];

  return (
    <div className="w-full flex flex-col items-center gap-10 py-12 bg-white">

      {/* Heading */}
      <h1 className="text-[#1B223C] font-poppins font-medium text-2xl xs:text-3xl sm:text-4xl md:text-[38.4px] leading-tight tracking-[-0.873px] text-center">
        Lorem ipsum dolor sit amet{" "}
        <span className="bg-linear-to-r from-[#7CF38D] to-[#50AA18] bg-clip-text text-transparent block">
          consectetur. kshi
        </span>
      </h1>
      <p className="text-[#7C7C7C] font-nunito text-[20px] text-center max-w-xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. kshi uemnamet consectetur. kshi uemnamet
      </p>

      {/* Cards */}
      <div className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-full max-w-7xl mx-auto">

        {plans.map((plan, index) => {
          const isGrowth = plan.title === "Growth";

          return (
            <div
              key={index}
              className="
          relative w-full max-w-[380px] p-[35px] flex flex-col gap-6
          rounded-[22.7px] bg-white border border-[#756FCC]
          shadow-[0_4px_9.6px_rgba(117,111,204,0.20)]
          overflow-hidden
        "
            >
              {isGrowth && (
                <img
                  src="/Ellipse 487.svg"
                  alt="decoration"
                  className="absolute z-0"
                  style={{ right: "1px", top: "0px", pointerEvents: "none" }}
                />
              )}

              {/* Title */}
              <h2 className="text-[#1B223C] font-poppins text-[28px] font-semibold relative z-10">
                {plan.title}
              </h2>

              <p className="text-[#7C7C7C] text-[16px] relative z-10">
                Unleash the Power of Your Business with Pro Plan.
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mt-1 relative z-10">
                <span className="text-[38px] font-poppins font-semibold text-[#1B223C]">
                  {plan.price}
                </span>
                <span className="text-[#7C7C7C] text-[16px] pb-1">
                  per month
                </span>
              </div>

              <div className="h-px bg-[#E5E5E5] my-2 relative z-10"></div>

              {/* Features */}
              <div className="flex flex-col gap-3 mt-2 relative z-10">
                {features.map((item, i2) => (
                  <div key={i2} className="flex items-center gap-3">
                    <Check size={18} className="text-[#1B223C]" />
                    <span className="text-[#1B223C] text-[16px]">{item}</span>
                  </div>
                ))}
              </div>

              <button
                className={`
            mt-4 w-full py-3 rounded-lg border border-[#756FCC]
            font-semibold transition relative z-10 cursor-pointer
            ${isGrowth ? "bg-[#756FCC] text-white" : "text-[#756FCC]"}
          `}
              >
                Get Started
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
