import { notFound } from "next/navigation";
import DetailsExerciseCard from "../../components/Card/DetailsExerciseCard";  

async function singleExerciseDataFetching(
  getDynamicPath: string,
) {
    const res = await fetch(
      `https://api.api-store.workers.dev/api/fitlog/${getDynamicPath}`,
    );

    if (!res.ok) {
      notFound();
    }

    return res.json();
 
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
