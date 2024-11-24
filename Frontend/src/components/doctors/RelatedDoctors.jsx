import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
const RelatedDoctors = ({ docId, specialty }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && specialty) {
      const doctorsData = doctors.filter(
        (doc) => doc.specialty === specialty && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [docId, specialty, doctors]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 md:mx-10 text-gray-900">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Explore our extensive list of trusted doctors
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            className="border border-blue-200 cursor-pointer rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            onClick={() => {
              navigate(`/schedule-appointment/${item._id}`);
              scrollTo(0, 0);
            }}
          >
            <img className="bg-blue-100" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2  bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-100 text-gray-600 px-12 py-3 rounded-full mt-10"
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;
