import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">About</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">Doctors</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">Contact</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute hidden pt-14 right-0 top-0 text-base font-medium text-gray-600 z-20 group-hover:block">
              <div className="min-w-48 bg-stone-200 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/booked-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary font-light hidden m-auto px-8 py-3 text-white rounded-full md:block"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
