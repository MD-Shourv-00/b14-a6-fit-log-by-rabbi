import { ExerciseDataType } from "@/app/type/type";
import Image from "next/image";
import Link from "next/link";
import {
  FiActivity,
  FiCheck,
  FiClock,
  FiStar,
} from "react-icons/fi";
import RemoveCardBtn from "./buttons/RemoveCardBtn";

interface PropsType {
  saveDataObj: ExerciseDataType;
}

const SavedCard = ({ saveDataObj }: PropsType) => {
  const {
    id,
    image,
    name,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = saveDataObj;

  return (
    <div className="flex w-full items-center rounded-[12px] border border-(--secondary-background) bg-(--primary-background) px-3 justify-between max-sm:flex-col my-7 ">
      <div className="flex">
        {/* Image */}
        <Image
          src={image}
          alt={name}
          width={112}
          height={64}
          className="h-[64px] max-lg:h-full my-3 w-[112px] rounded-[8px] object-cover object-center"
        />

        {/* Workout info */}
        <div className="ml-4 flex flex-1 flex-col justify-center">
          <h3 className="text-[15px] font-bold uppercase text-(--primary-text-color)">
            {name}
          </h3>

          <p className="mb-2 text-[13px] text-(--secondary-text-color)">
            {equipment}
          </p>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[12px] text-(--secondary-text-color)">
              <FiClock className="text-(--common-color)" />
              {duration} min
            </span>

            <span className="flex items-center gap-1 text-[12px] text-(--secondary-text-color)">
              <FiActivity className="text-(--common-color)" />
              {caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 text-[12px] text-(--secondary-text-color)">
              <FiStar className="text-(--common-color)" />
              {rating}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-7 my-3">
        <div className="flex gap-3 items-center max-md:flex-col max-sm:flex-row">
          {" "}
          <Link href={`/${id}`}>
            <button className="max-sm:text-[12px] rounded-full border border-(--secondary-background) px-4 py-2 text-[12px] text-(--secondary-text-color) transition-colors hover:text-(--primary-text-color)">
              View Details
            </button>
          </Link>
          <button className="max-sm:text-[12px] flex items-center gap-1 rounded-full bg-(--common-color) text-[12px] font-bold text-(--primary-background) py-2 px-2">
            <FiCheck />
            Mark as Done
          </button>
        </div>

        {/* remove btn */}
        <RemoveCardBtn saveDataObj={saveDataObj} />
      </div>
    </div>
  );
};

export default SavedCard;
