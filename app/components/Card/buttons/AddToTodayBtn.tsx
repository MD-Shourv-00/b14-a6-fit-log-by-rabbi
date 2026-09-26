"use client";

import { ThemeContext } from "@/app/context/page";
import { ExerciseDataType } from "@/app/type/type";
import { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { toast } from "react-toastify";

export interface PropsType {
  singleExerciseData: ExerciseDataType;
}

const AddToTodayBtn = ({
  singleExerciseData,
}: PropsType) => {
  // data bringing from context page
  const todaysPlanState = useContext(ThemeContext);

  if (!todaysPlanState) {
    return [];
  }

  const { todaysPlan, setTodaysPlan } = todaysPlanState;

  const handleAddTobtn = () => {
    const isSameDataExist = todaysPlan.some(
      (data) => data.id === singleExerciseData.id,
    );
    
    if (isSameDataExist) {
      toast.error(
        `${singleExerciseData.name} already added into Today's Plan`,
      );
    } else {
      setTodaysPlan([...todaysPlan, singleExerciseData]);
      toast.success(
        `You added ${singleExerciseData.name} into Today's Plan`,
      );
    }

    
  };

  return (
    <div>
      <button
        onClick={() => handleAddTobtn()}
        className="flex items-center gap-2 rounded-[8px] bg-(--common-color) px-5 py-3 text-[13px] font-bold text-(--primary-background) hover:bg-[#99c109] duration-300">
        <FaRegCalendarPlus />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddToTodayBtn;
