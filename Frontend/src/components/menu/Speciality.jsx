import { Link } from "react-router-dom";
import { specialtyData } from "../../assets/assets";
const Speciality = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 className="text-3xl font-medium">Find A Specialty</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse through our extensive list of trusted doctors, schedule an
        appointment.
      </p>
      <div className="flex gap-4 sm:justify-center pt-5 w-full overflow-scroll">
        {specialtyData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.specialty}`}
          >
            <img className="mb-2 w-16 sm:w-24" src={item.image} alt="" />
            <p>{item.specialty}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
