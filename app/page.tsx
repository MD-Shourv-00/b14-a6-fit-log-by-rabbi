import Banner from "./components/Banner";
import ExerciseCard from "./components/Card/ExerciseCard";
import { ExerciseDataType } from "./type/type";

async function exerciseDataFetching() {
  try {
    const response = await fetch(
      "https://api.abcz.workers.dev/api/fitlog",
    );

    if (!response.ok) {
      throw new Error(
        `http error status: ${response.status}`,
      );
    }

    return response.json();
  } catch (error) {
    console.error("fetch api failed:", error);

    return [];
  }
}

export default async function Home() {
  const exerciseData = await exerciseDataFetching();
  return (
    <div>
      <Banner />

      {/* the library section */}
      <section className="container mx-auto my-10">
        {/* short title */}
        <div className="max-lg:text-center mb-5">
          <h2 className="font-(family-name:--primary-font) text-3xl text-(--primary-text-color) font-bold my-3">
            THE LIBRARY
          </h2>
          <p>
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* library cards here */}

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-around gap-7">
          {exerciseData.map(
            (exerDataObj: ExerciseDataType) => (
              <ExerciseCard
                key={exerDataObj.id}
                exerDataObj={exerDataObj}
              />
            ),
          )}
        </div>
      </section>
    </div>
  );
}
