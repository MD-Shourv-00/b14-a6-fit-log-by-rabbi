'use client'

import { FiBookmark } from "react-icons/fi";
import { PropsType } from "./AddToTodayBtn";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/page";
import { toast } from "react-toastify";

const SaveForLaterBtn = ({
  singleExerciseData,
}: PropsType) => {

  // data loading from context page
  const todaysPlanState = useContext(ThemeContext);

  if (!todaysPlanState) {
    return [];
  }

  const { savedData, setSavedData } = todaysPlanState;

  const handleSavedBtn = () => {
    const isSameDataExist = savedData.some(data => data.id === singleExerciseData.id)

    if(isSameDataExist){
      toast.error(`${singleExerciseData.name} already added into Saved Tab`)
    } else{
       setSavedData([...savedData, singleExerciseData]);
       toast.success(
         `You added ${singleExerciseData.name} into Saved Tab`,
       );
    }

   
  };

  return (
    <div>
      <button
        onClick={() => handleSavedBtn()}
        className="flex items-center gap-2 rounded-[8px] border border-(--secondary-background) px-5 py-3 text-[13px] text-(--primary-text-color) hover:bg-(--nav-manu-bg) duration-300">
        <FiBookmark />
        Save for later
      </button>
    </div>
  );
};

export default SaveForLaterBtn;
