import React from "react";

const StaticsCard = () => {
  return (
    <div className="border border-(--border-color) rounded-2xl w-full bg-(--secondary-background) grid grid-cols-3 justify-between">
      {/* left side */}
      <div className="flex flex-col ml-10 my-7">
        <span className="font-[13px] text-(--secondary-text-color)">
          Exercise
        </span>
        <span className="text-3xl font-bold text-(--common-color) font-(family-name:--primary-font)">
          2
        </span>
      </div>
      {/* middle side */}
      <div className="flex flex-col pl-10 my-7 border-l border-r border-(--border-color)">
        <span className="font-[13px] text-(--secondary-text-color)">
          Minutes
        </span>
        <span className="text-3xl font-bold font-(family-name:--primary-font) ">
          27
        </span>
      </div>
      {/* right side */}
      <div className="flex flex-col ml-10 my-7">
        <span className="font-[13px] text-(--secondary-text-color)">
          Calories
        </span>
        <span className="text-3xl font-bold font-(family-name:--primary-font)">
          298
        </span>
      </div>
    </div>
  );
};

export default StaticsCard;
