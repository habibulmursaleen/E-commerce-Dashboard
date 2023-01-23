import React from "react";
import DailyAct from "../components/Cards/DailyAct";
import Earnings from "../components/Cards/Earnings";
import FrontCard from "../components/Cards/FrontCard";
import Info from "../components/Cards/Info";
import MadicalPro from "../components/Cards/MadicalPro";
import RecentCard from "../components/Cards/RecentCard";
import RevenueUpdates from "../components/Cards/RevenueUpdates";
import Sales from "../components/Cards/Sales";
import WeeklyStat from "../components/Cards/WeeklyStat";

const Ecommerce = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <FrontCard />
        <Info />
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <RevenueUpdates />
        <div>
          <Earnings />
          <Sales />
        </div>
      </div>

      <RecentCard />

      <div className="flex flex-wrap justify-center">
        <WeeklyStat />
        <MadicalPro />
        <DailyAct />
      </div>
    </div>
  );
};

export default Ecommerce;
