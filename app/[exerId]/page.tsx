import DetailsExerciseCard from "../components/Card/DetailsExerciseCard";

async function singleExerciseDataFetching(getDynamicPath: string) {
  try {
    const res = await fetch(
      `https://api.api-store.workers.dev/api/fitlog/${getDynamicPath}`,
    );

    if (!res.ok) {
      throw new Error(`Http error status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.log(`Data fetching fail: ${error}`);

    return [];
  }
}

interface PropsType {
  params: Promise<{ exerId: string }>;
}

const detailsPage = async ({ params }: PropsType) => {
  const { exerId } = await params;

  const singleExerciseData =
    await singleExerciseDataFetching(exerId);

  return (
    // detailPages section
    <section>
      <DetailsExerciseCard
        singleExerciseData={singleExerciseData}
      />
    </section>
  );
};

export default detailsPage;
