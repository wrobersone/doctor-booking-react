import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/doctors/RelatedDoctors";
const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // Get Date with Index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      // Setting End Time
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(24, 0, 0, 0);
      // Setting Hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 12 ? currentDate.getHours() + 1 : 12
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        // Increment by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div>
            <img
              className="bg-primary w-full rounded-lg sm:max-w-72"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="border flex-1 border-gray-400 rounded-lg bg-white p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 font-medium text-2xl text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />{" "}
            </p>
            <div className="flex gap-2 items-center text-gray-600 text-sm mt-1">
              <p>
                {docInfo.degree} - {docInfo.specialty}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            <div>
              <p className="flex gap-1 items-center font-medium text-sm text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />{" "}
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="font-medium mt-4 text-gray-500">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currency}
                {docInfo.fees}
              </span>{" "}
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="font-medium sm:ml-72 sm:pl-4 mt-4 text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center mt-4 w-full overflow-x-scroll">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`cursor-pointer min-w-16 py-6 text-center rounded-full ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>
                    {item[0]?.datetime && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p>{item[0]?.datetime && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full mt-4 overflow-x-scroll">
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`font-light cursor-pointer flex-shrink-0 text-sm px-5 py-2 rounded-full ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time?.toLowerCase()}
                </p>
              ))}
          </div>

          <button className="bg-primary font-light px-14 text-white text-sm py-3 rounded-full my-6">
            Book An Appointment
          </button>
        </div>

        {/* Related Doctors */}
        <RelatedDoctors docId={docId} specialty={docInfo.specialty} />
      </div>
    )
  );
};

export default Appointment;
