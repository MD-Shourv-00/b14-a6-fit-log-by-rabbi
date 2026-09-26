import { ExerciseDataType } from "@/app/type/type";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

interface PropsType {
  exerDataObj: ExerciseDataType;
}

const ExerciseCard = ({ exerDataObj }: PropsType) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exerDataObj;

  return (
    <Link href={`/${id}`}>
      <div className="w-full overflow-hidden rounded-[18px] border-2 border-(--secondary-background) bg-(--primary-background) font-(family-name:--primary-font)border-2 hover:border-(--common-color) duration-500 ease-in-out">
        {/* Card image */}
        <div className="h-[250px] w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="w-full h-full object-cover hover:scale-105 duration-500 object-[0%_36%]"
          />
        </div>

        {/* Card content */}
        <div className="p-6">
          {/* Categories */}
          <div className="mb-4 flex gap-2">
            {muscleGroups.map(
              (muscle: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-(--common-color) px-3 py-1 text-[12px] font-bold uppercase text-(--primary-background)">
                  {muscle}
                </span>
              ),
            )}
          </div>

          {/* Workout Name */}
          <h3 className="mb-1 text-[20px] font-bold uppercase text-(--primary-text-color)">
            {name}
          </h3>

          {/* Workout equipment */}
          <p className="mb-5 text-[14px] text-(--primary-text-color)">
            {equipment}
          </p>

          {/* Divider */}
          <hr className="mb-4 w-full bg-(--secondary-background)" />

          {/* Workout information */}
          <div className="flex items-center gap-5 text-[13px] text-(--primary-text-color)">
            <span className="flex items-center gap-1.5">
              <span className="text-[15px]">
                <MdOutlineWatchLater />
              </span>
              {duration}
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-[15px]">
                <FaFireAlt />
              </span>
              {caloriesBurned}
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-[15px]">
                <CiStar />
              </span>
              {rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
