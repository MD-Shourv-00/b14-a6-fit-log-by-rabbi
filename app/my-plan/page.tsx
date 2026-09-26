"use client";

import { useContext } from "react";
import StaticsCard from "../components/Card/StaticsCard";
import { ThemeContext } from "../context/page";
import TodaysPlanCard from "../components/Card/TodaysPlanCard";
import { ExerciseDataType } from "../type/type";
import SavedCard from "../components/Card/SavedCard";
import Link from "next/link";

const MyPlanPage = () => {
  const dataState = useContext(ThemeContext);
  if(!dataState){
    return [];
  }
  const { todaysPlan, savedData } = dataState;

  return (
    // my plan page section
    <section className="container mx-auto">
      {/* small title */}
      <div className="max-md:text-center">
        <h1 className="text-3xl text-(--primary-text-color) font-(family-name:--primary-font)">
          MY PLAN
        </h1>
        <p className="text-[16px] max-sm:text-[12px] text-(--secondary-text-color) my-2">
          Cap of five lifts for today. Finish them, then
          load more.
        </p>
      </div>
      {/* statics section */}
      <StaticsCard />

      {/* tab and sort by section */}

      <div className="my-10">
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab bg-(--secondary-background) text-(--primary-text-color) border-white"
            aria-label="Today's Plan"
          />
          <div className="tab-content p-6">
            {todaysPlan.length !== 0 ? (
              todaysPlan.map(
                (todaysPlanData: ExerciseDataType) => (
                  <TodaysPlanCard
                    key={todaysPlanData.id}
                    todaysPlanData={todaysPlanData}
                  />
                ),
              )
            ) : (
              <div className="flex h-[250px] w-full flex-col items-center justify-center rounded-[12px] border border-dashed border-(--secondary-background) bg-(--primary-background)">
                <h2 className="mb-1 text-[24px] font-bold text-(--primary-text-color) font-(family-name:--primary-font)">
                  NOTHING HERE YET
                </h2>

                <p className="mb-5 text-[14px] text-(--secondary-text-color)">
                  Browse the library and add a lift to get
                  today moving.
                </p>

                <Link
                  href="/workouts"
                  className="rounded-full bg-(--common-color) px-5 py-2.5 text-[16px] font-bold text-(--primary-background) transition-opacity hover:opacity-90">
                  Go to workouts
                </Link>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab bg-(--secondary-background) text-(--primary-text-color)"
            aria-label="Saved"
            defaultChecked
          />
          <div className="tab-content p-6">
            {savedData.length !== 0 ? (
              savedData.map(
                (saveDataObj: ExerciseDataType) => (
                  <SavedCard
                    key={saveDataObj.id}
                    saveDataObj={saveDataObj}
                  />
                ),
              )
            ) : (
              <div className="flex h-[250px] w-full flex-col items-center justify-center rounded-[12px] border border-dashed border-(--secondary-background) bg-(--primary-background)">
                <h2 className="mb-1 text-[24px] font-bold text-(--primary-text-color) font-(family-name:--primary-font)">
                  NOTHING HERE YET
                </h2>

                <p className="mb-5 text-[14px] text-(--secondary-text-color)">
                  Browse the library and add a lift to get
                  today moving.
                </p>

                <Link
                  href="/workouts"
                  className="rounded-full bg-(--common-color) px-5 py-2.5 text-[16px] font-bold text-(--primary-background) transition-opacity hover:opacity-90">
                  Go to workouts
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* sorting option */}
        <div className="text-(--secondary-text-color)">
          <span>Sort By:</span>
          <select
            defaultValue="duration"
            className="select select-secondary bg-(--secondary-background) border-none outline-none w-30 hover:text-(--common-color) ">
            <option
              className="border border-(--border-color) my-1"
              value={"rating"}>
              Rating
            </option>
            <option
              className="border border-(--border-color) my-1"
              value={"duration"}>
              Duration
            </option>
            <option
              className="border border-(--border-color) my-1"
              value={"calories"}>
              Calories
            </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
