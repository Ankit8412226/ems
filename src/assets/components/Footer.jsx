export default function Footer() {
  return (
    <footer
      className="
        w-full px-[60px] py-[60px]
        flex flex-wrap justify-between items-start
        gap-y-4
        bg-[linear-gradient(90deg,#FFFFFF_0%,#B1F6BB_100%)]
      "
    >
      {/* Left Logo Column */}
      <div className="flex flex-col gap-4 min-w-[220px]">

        <img
      src="/Orga Logo (1).svg"
          alt="logo"
          className="w-[120px] h-auto"
        />

        <p className="text-[#1B223C] font-nunito text-[18px]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      {/* Orga Links */}
      <div className="flex flex-col gap-3 min-w-[200px] mt-6 md:mt-0">
        <h3 className="text-[#1B223C] font-poppins font-semibold text-[20px]">
          Orga
        </h3>

        <ul className="flex flex-col gap-2 text-[#1B223C] font-nunito text-[18px]">
          <li>Book a Demo</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Use Cases */}
      <div className="flex flex-col gap-3 min-w-[200px] mt-6 md:mt-0">
        <h3 className="text-[#1B223C] font-poppins font-semibold text-[20px]">
          Use Cases
        </h3>

        <ul className="flex flex-col gap-2 text-[#1B223C] font-nunito text-[18px]">
          <li>Project Management</li>
          <li>HRMS</li>
          <li>Finance Management</li>
          <li>Support</li>
        </ul>
      </div>

      {/* Solutions */}
      <div className="flex flex-col gap-3 min-w-[200px] mt-6 md:mt-0">
        <h3 className="text-[#1B223C] font-poppins font-semibold text-[20px]">
          Solutions
        </h3>

        <ul className="flex flex-col gap-2 text-[#1B223C] font-nunito text-[18px]">
          <li>Project Organizer</li>
          <li>Online Project Board</li>
          <li>Task board</li>
        </ul>
      </div>
    </footer>
  );
}
