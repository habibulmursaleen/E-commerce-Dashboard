import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React from "react";
import { Button } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import { dropdownData, recentTransactions } from "../../data/dummy";
import Area from "../Charts/Area";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const RecentCard = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="flex gap-10 m-4 flex-wrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
        <div className="flex justify-between items-center gap-2">
          <p className="text-xl font-semibold">Recent Transactions</p>
          <DropDown currentMode={currentMode} />
        </div>
        <div className="mt-10 w-72 md:w-400">
          {recentTransactions.map((item) => (
            <div key={item.title} className="flex justify-between mt-4">
              <div className="flex gap-4">
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <div>
                  <p className="text-md font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
              <p className={`text-${item.pcColor}`}>{item.amount}</p>
            </div>
          ))}
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
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
        <div className="flex justify-between items-center gap-2 mb-10 w-auto">
          <p className="text-xl font-semibold">Sales Overview</p>
          <DropDown currentMode={currentMode} />
        </div>
        <div className="md:w-full overflow-auto">
          <Area />
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
