import React, { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "edward@example.com",
    phone: "+1 234 567 8910",
    address: {
      line1: "123 Main St",
      line2: "Apt 456",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    gender: "Male",
    dob: "1990-05-15",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex flex-col gap-2 max-w-lg text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 font-medium max-w-60 mt-4 text-3xl"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
      ) : (
        <h1 className="font-medium text-2xl text-neutral-800 mt-4">
          {userData.name}
        </h1>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="uppercase underline text-neutral-500 mt-3">
          Contact Information
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email Address:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100 max-w-52"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                name=""
                id=""
              />
              <br />
              <input
                className="bg-gray-100 max-w-52"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
                name=""
                id=""
              />
              <br />
              <input
                className="bg-gray-100 max-w-52"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, city: e.target.value },
                  }))
                }
                value={userData.address.city}
                type="text"
                name=""
                id=""
              />
              <input
                className="bg-gray-100 max-w-52"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, state: e.target.value },
                  }))
                }
                value={userData.address.state}
                type="text"
                name=""
                id=""
              />
              <input
                className="bg-gray-100 max-w-52"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, zip: e.target.value },
                  }))
                }
                value={userData.address.zip}
                type="number"
                name=""
                id=""
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
              <br />
              {userData.address.city}, {userData.address.state}{" "}
              {userData.address.zip}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="uppercase underline text-neutral-500 mt-3">
          Basic Information
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender: </p>
          {isEdit ? (
            <select
              className="bg-gray-100 max-w-20"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday: </p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
