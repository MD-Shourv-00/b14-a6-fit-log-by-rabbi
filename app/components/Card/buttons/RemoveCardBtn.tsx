import { ThemeContext } from "@/app/context/page";
import { ExerciseDataType } from "@/app/type/type";
import { useContext } from "react";
import { FiX } from "react-icons/fi";

interface PropsType {
  todaysPlanData?: ExerciseDataType;
  saveDataObj?: ExerciseDataType;
}

const RemoveCardBtn = ({
  todaysPlanData,
  saveDataObj,
}: PropsType) => {
  const stateObj = useContext(ThemeContext);

  if (!stateObj) {
    return [];
  }

  const {
    todaysPlan,
    setTodaysPlan,
    savedData,
    setSavedData,
  } = stateObj;

  function handleRemoveBtn() {
    if (todaysPlanData) {
      const newTodaysPlan = todaysPlan.filter(
        (dataObj) => dataObj.id !== todaysPlanData.id,
      );

      setTodaysPlan([...newTodaysPlan]);
    }

    if (saveDataObj) {
      const newSaveData = savedData.filter(
        (dataObj) => dataObj.id !== saveDataObj.id,
      );

      setSavedData([...newSaveData]);
    }
  }
  return (
    <div>
      <button
        onClick={handleRemoveBtn}
        className="ml-2 text-(--secondary-text-color) transition-colors hover:text-(--primary-text-color)">
        <FiX size={17} />
      </button>
    </div>
  );
};

export default RemoveCardBtn;
