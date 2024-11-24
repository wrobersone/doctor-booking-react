import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 md:mx-10 lg:px-12 my-20">
      {/* Left Side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          <p>Book Appointment</p>
          <p className="mt-4">with 50+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white rounded-full text-sm sm:text-base px-8 py-3 text-gray-600 mt-6 hover:scale-105 transition-all"
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="hidden md:block relative md:w-1/2 lg:w-[370px]">
        <img
          className="absolute bottom-0 right-0 max-w-md w-full"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
