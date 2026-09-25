"use client";

import { Workout } from "@/app/Type/Type";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { WorkoutContext } from "@/app/Context/WorkoutProvider";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { MdOutlineTimer } from "react-icons/md";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

interface PlanProps {
  plan: Workout;
  isDone?: boolean;
}

const ListedCard = ({ plan, isDone }: PlanProps) => {
  const { addPlan, setAddPlan, savePlan, setSavePlan } =
    useContext(WorkoutContext);

  const handleRemove = () => {
    setAddPlan(addPlan.filter((item) => item.id !== plan.id));
    setSavePlan(savePlan.filter((item) => item.id !== plan.id));
  };

  const handleMarkAsDone = () => {
    setAddPlan(addPlan.filter((item) => item.id !== plan.id));

    if (!savePlan.find((item) => item.id === plan.id)) {
      setSavePlan([...savePlan, plan]);
    }
  };

  return (
    <div
      className="
        w-full
        flex flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
        p-4
        bg-[#1c1c24]
        rounded-2xl
        mb-4
        border border-[#2b2b36]
        shadow-sm
      "
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {/* IMAGE */}
        <div
          className="
            relative
            w-[90px] h-[65px]
            sm:w-[110px] sm:h-[75px]
            md:w-[120px] md:h-[80px]
            rounded-xl
            overflow-hidden
            shrink-0
            bg-gray-800
          "
        >
          <Image
            src={plan.image}
            alt={plan.name}
            fill
            className="object-cover"
          />
        </div>

        {/* WORKOUT INFO */}
        <div className="flex flex-col min-w-0">
          {/* Name */}
          <h3
            className="
              text-white
              font-bold
              text-sm
              sm:text-base
              md:text-lg
              uppercase
              tracking-wide
              truncate
            "
          >
            {plan.name}
          </h3>

          {/* Equipment */}
          <p className="text-gray-400 text-xs sm:text-sm font-medium truncate">
            {plan.equipment}
          </p>

          {/* STATS */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-1
              mt-2
              text-xs
              text-gray-400
              font-medium
            "
          >
            {/* Duration */}
            <span className="flex items-center gap-1 whitespace-nowrap">
              <MdOutlineTimer className="text-[#d4ff00] text-base" />
              {plan.duration} min
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1 whitespace-nowrap">
              <FaFireFlameCurved className="text-[#d4ff00]" />
              {plan.caloriesBurned} kcal
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1 whitespace-nowrap">
              <FaStar className="text-[#d4ff00]" />
              {plan.rating}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          flex
          items-center
          gap-2
          sm:gap-3
          md:shrink-0
          w-full
          md:w-auto
        "
      >
        {/* View Details */}
        <Link
          href={`/Library/${plan.id}`}
          className="
            flex-1
            md:flex-none
            text-center
            px-3
            sm:px-5
            py-2
            border
            border-gray-600
            rounded-full
            text-gray-300
            text-xs
            sm:text-sm
            font-medium
            hover:bg-gray-700
            transition
          "
        >
          View Details
        </Link>

        {/* Mark as Done */}
        {!isDone && (
          <button
            onClick={handleMarkAsDone}
            className="
              flex-1
              md:flex-none
              flex
              items-center
              justify-center
              gap-1
              sm:gap-2
              px-3
              sm:px-5
              py-2
              bg-[#d4ff00]
              hover:bg-[#bce600]
              text-black
              rounded-full
              text-xs
              sm:text-sm
              font-bold
              transition
              shadow-sm
            "
          >
            <TiTick className="text-lg" />
            <span>Mark as Done</span>
          </button>
        )}

        {/* Remove */}
        <button
          onClick={handleRemove}
          aria-label="Remove workout"
          className="
            shrink-0
            p-2
            text-gray-500
            hover:text-gray-300
            hover:bg-gray-800
            rounded-full
            transition
          "
        >
          <RxCross1 className="text-base sm:text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ListedCard;
