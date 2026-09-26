import { ExerciseDataType } from "@/app/type/type";
import Image from "next/image";
import Link from "next/link";
import {
  FiActivity,
  FiClock,
  FiStar,
  FiX,
} from "react-icons/fi";

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
    <div className="flex h-[90px] w-full items-center rounded-[12px] border border-(--secondary-background) bg-(--primary-background) px-3">
      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={112}
        height={64}
        className="h-[64px] w-[112px] rounded-[8px] object-cover object-center"
      />

      {/* Workout info */}
      <div className="ml-4 flex flex-1 flex-col justify-center">
        <h3 className="text-[16px] font-bold uppercase text-(--primary-text-color)">
          {name}
        </h3>

        <p className="mb-2 text-[14px] text-(--secondary-text-color)">
          {equipment}
        </p>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[13px] text-(--secondary-text-color)">
            <FiClock className="text-(--common-color)" />
            {duration} min
          </span>

          <span className="flex items-center gap-1 text-[13px] text-(--secondary-text-color)">
            <FiActivity className="text-(--common-color)" />
            {caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1 text-[13px] text-(--secondary-text-color)">
            <FiStar className="text-(--common-color)" />
            {rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Link href={`/${id}`}>
          <button className="rounded-full border border-(--secondary-background) px-4 py-2 text-[13px] text-(--secondary-text-color) transition-colors hover:text-(--primary-text-color)">
            View Details
          </button>
        </Link>

        <button className="ml-2 text-(--secondary-text-color) transition-colors hover:text-(--primary-text-color)">
          <FiX size={18} />
        </button>
      </div>
    </div>
  );
};

export default SavedCard;
