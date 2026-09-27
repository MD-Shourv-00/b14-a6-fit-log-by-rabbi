"use client";

import { useContext, useState } from "react";
import StaticsCard from "../components/Card/StaticsCard";
import { ThemeContext } from "../context/page";
import TodaysPlanCard from "../components/Card/TodaysPlanCard";
import { ExerciseDataType } from "../type/type";
import SavedCard from "../components/Card/SavedCard";
import Link from "next/link";

const MyPlanPage = () => {
  // State to hold the current sort value
  const [sortValue, setSortValue] =
    useState<string>("duration");

  const [currentTab, setCurrentTab] =
    useState<string>("todaysPlanTab");

  // data loading form context.
  const dataState = useContext(ThemeContext);
  if (!dataState) {
    return [];
  }
  const { todaysPlan, savedData } = dataState;

  // sorting function
  function sortTheArray(arrayOfObj: ExerciseDataType[]) {
    if (sortValue === "rating") {
      return arrayOfObj.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "duration") {
      return arrayOfObj.sort(
        (a, b) => a.duration - b.duration,
      );
    } else if (sortValue === "calories") {
      return arrayOfObj.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned,
      );
    }
    return arrayOfObj;
  }

  const sortedTodaysPlan = sortTheArray(todaysPlan);
  const sortedSaveData = sortTheArray(savedData);

  console.log(sortedTodaysPlan)
  console.log(sortedSaveData)



  return (
    // my plan page section
    <section className="container mx-auto max-sm:px-1.5">
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
      {currentTab === "todaysPlanTab" ? (
        <StaticsCard todaysPlan={todaysPlan} />
      ) : currentTab === "savedTab" ? (
        <StaticsCard savedData={savedData} />
      ) : (
        ""
      )}
      {/* tab and sort by section */}
      <div className="my-10 relative">
        {/* tabs */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            onChange={() => setCurrentTab("todaysPlanTab")}
            className="tab bg-(--secondary-background) text-(--primary-text-color) border-white"
            aria-label="Today's Plan"
            defaultChecked
          />
          <div className="tab-content p-6 max-h-max min-h-[300px]">
            {sortedTodaysPlan.length !== 0 ? (
              sortedTodaysPlan.map(
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
                  href="/"
                  className="rounded-full bg-(--common-color) px-5 py-2.5 text-[16px] font-bold text-(--primary-background) transition-opacity hover:opacity-90">
                  Go to workouts
                </Link>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            onChange={() => setCurrentTab("savedTab")}
            className="tab bg-(--secondary-background) text-(--primary-text-color)"
            aria-label="Saved"
          />
          <div className="tab-content p-6 max-h-max min-h-[300px]">
            {sortedSaveData.length !== 0 ? (
              sortedSaveData.map(
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
                  href="/"
                  className="rounded-full bg-(--common-color) px-5 py-2.5 text-[16px] font-bold text-(--primary-background) transition-opacity hover:opacity-90">
                  Go to workouts
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* sorting option */}
        <div className="text-(--secondary-text-color) absolute top-0 right-0">
          <span className="text-[11px] sm:text-[14px]">
            Sort By:
          </span>{" "}
          <select
            defaultValue={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
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
};;

export default MyPlanPage;
