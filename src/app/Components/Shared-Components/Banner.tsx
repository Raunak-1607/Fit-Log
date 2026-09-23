import Image from "next/image";
import hero from "@/app/assests/banner.png";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-[#15171E] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto mt-6">
      <div className="flex-1 flex flex-col items-start justify-center w-full">
        <h3 className="text-[#ccff00] text-xs font-bold tracking-[0.15em] uppercase mb-4">
          WORKOUT LIBRARY
        </h3>
        <h1 className="text-white text-3xl md:text-5xl lg:text-[3rem] font-black uppercase leading-[0.95] tracking-tighter mb-6 w-full max-w-[600px]">
          TRAIN WITH INTENT. LOG
          <br />
          EVERY SET.
        </h1>
        <p className="text-[#a1a1aa] text-sm md:text-base max-w-[420px] leading-relaxed mb-8">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <button className="bg-[#ccff00] text-black font-bold text-sm px-6 py-3 rounded-md hover:bg-[#b8e600] transition-colors uppercase tracking-wide">
          BROWSE WORKOUTS
        </button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end items-center w-full mt-8 md:mt-0">
        <Image
          src={hero}
          alt="Gym Machine Companion"
          width={500}
          height={500}
          className="w-full max-w-[300px] md:max-w-[380px] lg:max-w-[420px] h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
