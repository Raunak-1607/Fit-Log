"use client";

import React, { useContext, useState } from "react";
import { WorkoutContext } from "@/app/Context/WorkoutProvider";
import ListedCard from "../Shared-Components/ListedCard";
import Link from "next/link";
import { Workout } from "@/app/Type/Type";

const MyPlanPage = () => {
  const { addPlan, savePlan } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState("today");
  const currentList = activeTab === "today" ? addPlan : savePlan;
  const [sortBy, setSortBy] = useState<"duration" | "rating" | "calories">(
    "duration",
  );

  const sortWorkout = (workout: Workout[]) => {
    const sortedWorkout = [...workout];
    if (sortBy === "rating") {
      sortedWorkout.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      sortedWorkout.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedWorkout.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }
    return sortedWorkout;
  };

  const sortAddPlan = sortWorkout(addPlan);
  const sortSavePlan = sortWorkout(savePlan);

  console.log("ADD PLAN:", addPlan);
  console.log("SAVE PLAN:", savePlan);
  console.log("ACTIVE TAB:", activeTab);

  return (
    <div className="min-h-screen">
      <main className="max-w-[1200px] mx-auto px-5 py-8">
        {/* Header */}
        <h1 className="text-3xl font-black">MY PLAN</h1>

        <p className="text-sm text-gray-500 mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Statistics */}
        <div className="bg-[#13161c] border border-[#252a33] rounded-2xl p-6 my-7">
          <div className="grid grid-cols-3">
            <div className="border-r border-[#252a33]">
              <p className="text-sm text-gray-500">Exercises</p>

              <p className="text-4xl font-black text-[#ccff00]">
                {currentList.length}
              </p>
            </div>

            <div className="px-7 border-r border-[#252a33]">
              <p className="text-sm text-gray-500">Minutes</p>

              <p className="text-4xl font-black">
                {currentList.reduce(
                  (total, workout) => total + workout.duration,
                  0,
                )}
              </p>
            </div>

            <div className="px-7">
              <p className="text-sm text-gray-500">Calories</p>

              <p className="text-4xl font-black">
                {currentList.reduce(
                  (total, workout) => total + workout.caloriesBurned,
                  0,
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex bg-[#15181e] border border-[#252a33] rounded-xl p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 rounded-lg text-sm ${
                activeTab === "today"
                  ? "bg-[#20252d] text-white"
                  : "text-gray-500"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 rounded-lg text-sm ${
                activeTab === "saved"
                  ? "bg-[#20252d] text-white"
                  : "text-gray-500"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "rating" | "calories")
              }
              className="bg-[#13161c] border border-[#252a33] rounded-lg px-4 py-2 text-sm"
            >
              <option value={"duration"}>Duration</option>
              <option value={"calories"}>Calories</option>
              <option value={"rating"}>Rating</option>
            </select>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-4">
          {activeTab === "today" ? (
            addPlan.length > 0 ? (
              sortAddPlan.map((plan, index) => (
                <ListedCard key={index} plan={plan} />
              ))
            ) : (
              <EmptyState message="Browse the library and add a lift to get moving." />
            )
          ) : savePlan.length > 0 ? (
            sortSavePlan.map((plan, index) => (
              <ListedCard key={index} plan={plan} isDone={true} />
            ))
          ) : (
            <EmptyState message="Save a workout to see it here." />
          )}
        </div>
      </main>
    </div>
  );
};

const EmptyState = ({ message }: { message: string }) => {
  return (
    <div className="min-h-[265px] border border-dashed border-[#252a33] rounded-xl flex flex-col items-center justify-center">
      <h2 className="text-xl font-black">NOTHING HERE YET</h2>

      <p className="text-sm text-gray-500 mt-2">{message}</p>

      <Link href="/">
        <button className="mt-5 bg-[#ccff00] text-black font-bold px-6 py-3 rounded-full">
          Go to workouts
        </button>
      </Link>
    </div>
  );
};

export default MyPlanPage;
