import React from "react";
import { IoIosMore } from "react-icons/io";
import { Button } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import { medicalproBranding } from "../../data/dummy";

const MadicalPro = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
      <div className="flex justify-between">
        <p className="text-xl font-semibold">MedicalPro Branding</p>
        <button type="button" className="text-xl font-semibold text-gray-400">
          <IoIosMore />
        </button>
      </div>
      <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
        16 APR, 2021
      </p>

      <div className="flex gap-4 border-b-1 border-color mt-6">
        {medicalproBranding.data.map((item) => (
          <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
            <p className="text-xs text-gray-400">{item.title}</p>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="border-b-1 border-color pb-4 mt-2">
        <p className="text-md font-semibold mb-2">Teams</p>

        <div className="flex gap-4">
          {medicalproBranding.teams.map((item) => (
            <p
              key={item.name}
              style={{ background: item.color }}
              className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-md font-semibold mb-2">Leaders</p>
        <div className="flex gap-4">
          {medicalproBranding.leaders.map((item, index) => (
            <img
              key={index}
              className="rounded-full w-8 h-8"
              src={item.image}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 border-t-1 border-color">
        <div className="mt-3">
          <Button
            color="white"
            bgColor={currentColor}
            text="Add"
            borderRadius="10px"
          />
        </div>

        <p className="text-gray-400 text-sm">36 Recent Transactions</p>
      </div>
    </div>
  );
};

export default MadicalPro;
