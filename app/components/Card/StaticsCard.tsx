import { ExerciseDataType } from "@/app/type/type";
import React from "react";

interface PropsType {
  todaysPlan?: ExerciseDataType[];
  savedData?: ExerciseDataType[];
}

const StaticsCard = ({
  todaysPlan,
  savedData,
}: PropsType) => {

  
  if (todaysPlan) {
    const totalMinuts = todaysPlan.reduce((accu, current) => accu + current.duration, 0);

    const totalCalories = todaysPlan.reduce(
      (accu, current) => accu + current.caloriesBurned,
      0,
    );
    return (
      <div className="border border-(--border-color) rounded-2xl w-full bg-(--secondary-background) grid grid-cols-3 justify-between">
        {/* left side */}
        <div className="flex flex-col ml-10 my-7">
          <span className="font-[13px] text-(--secondary-text-color)">
            Exercise
          </span>
          <span className="text-3xl font-bold text-(--common-color) font-(family-name:--primary-font)">
            {todaysPlan.length}
          </span>
        </div>
        {/* middle side */}
        <div className="flex flex-col pl-10 my-7 border-l border-r border-(--border-color)">
          <span className="font-[13px] text-(--secondary-text-color)">
            Minutes
          </span>
          <span className="text-3xl font-bold font-(family-name:--primary-font) ">
            {totalMinuts}
          </span>
        </div>
        {/* right side */}
        <div className="flex flex-col ml-10 my-7">
          <span className="font-[13px] text-(--secondary-text-color)">
            Calories
          </span>
          <span className="text-3xl font-bold font-(family-name:--primary-font)">
            {totalCalories}
          </span>
        </div>
      </div>
    );
  } else if (savedData) {
    const totalMinuts = savedData.reduce(
      (accu, current) => accu + current.duration,
      0,
    );

    const totalCalories = savedData.reduce(
      (accu, current) => accu + current.caloriesBurned,
      0,
    );
    return (
      <div className="border border-(--border-color) rounded-2xl w-full bg-(--secondary-background) grid grid-cols-3 justify-between">
        {/* left side */}
        <div className="flex flex-col ml-10 my-7">
          <span className="font-[13px] text-(--secondary-text-color)">
            Exercise
          </span>
          <span className="text-3xl font-bold text-(--common-color) font-(family-name:--primary-font)">
            {savedData.length}
          </span>
        </div>
        {/* middle side */}
        <div className="flex flex-col pl-10 my-7 border-l border-r border-(--border-color)">
          <span className="font-[13px] text-(--secondary-text-color)">
            Minutes
          </span>
          <span className="text-3xl font-bold font-(family-name:--primary-font) ">
            {totalMinuts}
          </span>
        </div>
        {/* right side */}
        <div className="flex flex-col ml-10 my-7">
          <span className="font-[13px] text-(--secondary-text-color)">
            Calories
          </span>
          <span className="text-3xl font-bold font-(family-name:--primary-font)">
            {totalCalories}
          </span>
        </div>
      </div>
    );
  }
};

export default StaticsCard;
