import { ExerciseDataType } from "@/app/type/type";
import Image from "next/image";
import AddToTodayBtn from "./buttons/AddToTodayBtn";
import SaveForLaterBtn from "./buttons/SaveForLaterBtn";

interface PropsType {
  singleExerciseData: ExerciseDataType;
}

const DetailsExerciseCard = ({
  singleExerciseData,
}: PropsType) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    description,
    difficulty,
    sets,
    reps,
    instructions,
  } = singleExerciseData;

  return (
    <div className="container mx-auto flex max-md:flex-col items-center w-full overflow-hidden rounded-[14px] bg-(--primary-background) p-[14px] ">
      {/* Left side Image */}
      <Image
        src={image}
        alt={name}
        width={410}
        height={510}
        className="h-[700px] w-[410px] max-lg:h-[600] max-md:h-[310] max-md:rounded-2xl max-sm:h-[200] max-sm:w-[270] mb-4 rounded-[12px] object-cover object-center hover:scale-102 duration-500"
      />

      {/* Right side */}
      <div className="flex flex-1 flex-col px-10 py-1">
        <h2 className="mb-2 text-[26px] font-black uppercase leading-tight text-(--primary-text-color) font-(family-name:--primary-font)">
          {name}
        </h2>

        <p className="mb-4 max-w-[500px] text-[13px] leading-5 text-(--secondary-text-color)">
          {description}
        </p>

        {/* Muscle groups */}
        <div className="mb-5 flex gap-2">
          {muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="rounded-full bg-(--common-color) px-3 py-1 text-[12px] font-bold text-(--primary-background)">
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout information */}
        <div className="mb-6 overflow-hidden rounded-[12px] border border-[#292d36] bg-(--secondary-background)">
          <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
            <span className="text-[12px] font-bold uppercase text-(--primary-text-color)">
              Equipment
            </span>
            <span className="text-[13px] text-(--primary-text-color)">
              {equipment}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
            <span className="text-[12px] font-bold uppercase text-(--primary-text-color)">
              Difficulty
            </span>
            <span className="text-[13px] text-(--primary-text-color)">
              {difficulty}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
            <span className="text-[12px] font-bold uppercase text-(--primary-text-color)">
              Sets
            </span>
            <span className="text-[13px] text-(--primary-text-color)">
              {sets}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
            <span className="text-[12px] font-bold uppercase text-(--primary-text-color)">
              Reps
            </span>
            <span className="text-[13px] text-(--primary-text-color)">
              {reps}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
            <span className="text-[12px] font-bold uppercase text-(--primary-text-color)">
              Duration
            </span>
            <span className="text-[13px] text-(--primary-text-color)">
              {duration} min
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
            <span className="text-[12px] font-bold uppercase text-(--primary-text-color)">
              Calories
            </span>
            <span className="text-[13px] text-(--primary-text-color)">
              {caloriesBurned} kcal
            </span>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[12px] font-bold uppercase text-(--primary-text-color)">
              Rating
            </span>
            <span className="text-[13px] text-(--primary-text-color)">
              {rating}
            </span>
          </div>
        </div>

        {/* Instructions */}
        <h3 className="mb-3 text-[18px] font-bold uppercase text-(--primary-text-color)">
          Instructions
        </h3>

        <ol className="mb-6 space-y-2 pl-8 list-decimal">
          {instructions.map((instruction, index) => (
            <li
              key={index}
              className="text-[16px] leading-5 text-(--secondary-text-color)">
              {instruction}
            </li>
          ))}
        </ol>

        {/* Buttons */}
        <div className="flex gap-3">
          <AddToTodayBtn
            singleExerciseData={singleExerciseData}
          />

          <SaveForLaterBtn
            singleExerciseData={singleExerciseData}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsExerciseCard;
