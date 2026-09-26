import StaticsCard from "../components/Card/StaticsCard";

const myPlanPage = () => {
    
  return (
    // my plan page section
    <section className="container mx-auto">
      {/* small title */}
      <div className="max-md:text-center">
        <h1 className="text-3xl text-(--primary-text-color) font-(family-name:--primary-font)">
          MY PLAN
        </h1>
        <p className="text-[16px] max-sm:text-[12px] text-(--secondary-text-color) my-2">
          Cap of five lifts for today. Finish them, then
          load more.
        </p>
      </div>
      {/* statics section */}
      <StaticsCard />

      {/* tab and sort by section */}

      <div className="my-10">
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab bg-(--secondary-background) text-(--primary-text-color) border-white"
            aria-label="Today's Plan"
          />
          <div className="tab-content p-6">
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab bg-(--secondary-background) text-(--primary-text-color)"
            aria-label="Saved"
            defaultChecked
          />
          <div className="tab-content p-6">
            Tab content 2
          </div>
        </div>

        <div className="text-(--secondary-text-color)">
          <span>Sort By:</span> {/* sorting option */}
          <select
            defaultValue="duration"
            className="select select-secondary bg-(--secondary-background) border-none outline-none w-30 hover:text-(--common-color) ">
            <option
              className="border border-(--border-color) my-1"
              value={"rating"}>
              Rating
            </option>
            <option
              className="border border-(--border-color) my-1"
              value={"duration"}>
              Duration
            </option>
            <option
              className="border border-(--border-color) my-1"
              value={"calories"}>
              Calories
            </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default myPlanPage;
