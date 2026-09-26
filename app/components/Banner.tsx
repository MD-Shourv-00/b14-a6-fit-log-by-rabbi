"use client";

import Image from "next/image";
import bannerImg from "@/app/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto overflow-hidden rounded-[14px] border border-(--secondary-background) bg-(--secondary-background) flex max-lg:flex-col justify-around">
      <div>
        {/* Banner content */}
        <div className="relative z-10 flex min-h-[360px] items-center px-8 py-10 lg:px-12 max-lg:min-h-[420px] max-lg:justify-center max-lg:text-center">
          <div className="max-w-[570px] font-(family-name:--primary-font)  ">
            {/* Small title */}
            <p className="mb-5 text-[12px] font-bold uppercase text-(--common-color)">
              Workout Library
            </p>

            {/* Main title */}
            <h1 className="mb-4 text-[40px] font-black uppercase leading-[1.05] text-(--primary-text-color) sm:text-[48px] lg:text-[52px] ">
              Train With Intent. Log
              <br className="max-lg:hidden" />
              Every Set.
            </h1>

            {/* Description */}
            <p className="mb-6 max-w-[500px] text-[15px] leading-6 text-(--secondary-text-color) max-lg:mx-auto">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into today&apos;s plan,
              and watch the week&apos;s work add up.
            </p>

            {/* Button */}
            <button className="cursor-pointer rounded-[5px] bg-(--common-color) px-5 py-3 text-[12px] font-bold uppercase text-(--primary-background) transition-opacity hover:opacity-90 ">
              Browse Workouts
            </button>
          </div>
        </div>
      </div>

      {/* Workout image */}
      <Image
        src={bannerImg}
        alt="Workout machine"
        width={300}
        height={300}
        className="mx-auto md:my-10"
      />
    </section>
  );
};

export default Banner;
