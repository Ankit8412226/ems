export default function IntegrationSection() {

  const icons = Array(8).fill("/mnt/data/bbef9cdc-127a-41a9-aec2-1aef7306e3fc.png");

  return (
    <div className="w-full flex flex-col items-center py-16 bg-white">

      {/* Heading */}
      <h1 className="text-[#1B223C] font-poppins text-[42px] md:text-[48px] font-semibold text-center leading-snug">
        Connect with the Tools{" "}
        <span className="bg-linear-to-r from-[#7CF38D] to-[#50AA18] bg-clip-text text-transparent">
          You
        </span>
        <br/>
        <span className="bg-linear-to-r from-[#7CF38D] to-[#50AA18] bg-clip-text text-transparent">
          You Already Use.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#7C7C7C] font-nunito text-[20px] text-center mt-4 max-w-2xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. kshi uemnamet consectetur.
        kshi uemnamet consectetur. kshi uemnamet
      </p>

      <div
  className="
    mt-12 p-6 md:p-14
    rounded-3xl
    border-4 border-[#AAEBB3] min-w-[824px]
    bg-[linear-gradient(270deg,#FFFFFF_0%,#EAFFDD_100%)]
  "
>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {icons.map((icon, i) => (
      <div
        key={i}
        className="
          bg-white w-[120px] h-[120px]
          rounded-[22px] border border-[#E5E5E5]
          flex items-center justify-center
        "
      >
        <img
          src="./Vector.png"
          alt="integration-icon"
          className="w-14 h-14 object-contain"
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
