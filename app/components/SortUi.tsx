import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/page';

const SortUi = () => {
     // State to hold the current sort value
      const [sortValue, setSortValue] = useState<string>("duration");
    
      // data loading form context.
      const dataState = useContext(ThemeContext);
      
      if (!dataState) {
          return [];
        }
        const {
            todaysPlan,
            setTodaysPlan,
            savedData,
            setSavedData,
        } = dataState;
        
        useEffect(() => { const sortedTodaysPlan = [...todaysPlan].sort(
        
           (a, b) => {
             if (sortValue === "rating") {
               return b.rating - a.rating;
             } else if (sortValue === "duration") {
               return a.duration - b.duration;
             } else if (sortValue === "caloris") {
               return b.caloriesBurned - a.caloriesBurned;
             }
             return 0;
           },
         );
    
         const sortedSavedPlan = [...savedData].sort((a, b) => {
           if (sortValue === "rating") {
             return b.rating - a.rating;
           } else if (sortValue === "duration") {
             return a.duration - b.duration;
           } else if (sortValue === "calories") {
             return b.caloriesBurned - a.caloriesBurned;
           }
           return 0;
         });
    
         setTodaysPlan(sortedTodaysPlan);
         setSavedData(sortedSavedPlan);}, [sortValue, setTodaysPlan, setSavedData])
        return (
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
    );
};

export default SortUi;