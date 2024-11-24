import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col bg-primary flex-wrap md:flex-row rounded-lg px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:w-1/2 items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment with Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Explore our list of trusted doctors{" "}
            <br className="hidden sm:block" /> and schedule an appointment.
          </p>
        </div>
        <a
          href="#specialty"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      <div className="relative md:w-1/2">
        <img
          className="w-full rounded-lg md:absolute bottom-0 h-auto"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;