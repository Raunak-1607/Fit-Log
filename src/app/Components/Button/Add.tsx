"use client";

import { WorkoutContext } from "@/app/Context/WorkoutProvider";
import { Workout } from "@/app/Type/Type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
interface DataProps {
  data: Workout;
}
const AddBtn = ({ data }: DataProps) => {
  const { addPlan, setAddPlan } = useContext(WorkoutContext);
  const handleBtn = () => {
    const isAlreadyAdd = addPlan.some((b) => b.id === data.id);

        if (isAlreadyAdd) {
            toast.error("You have already Add this plan");
        } else {
            setAddPlan([...addPlan, data]);
            toast.success("Plan added successfully");
        }
    console.log("Add btn triggered");
  };
  return (
    <div>
      <button
        className="flex justify-center items-center bg-[#ccff00] text-black font-bold py-3 w-[200] rounded-xl"
        onClick={() => handleBtn()}
      >
        Add to today's plan
      </button>
    </div>
  );
};

export default AddBtn;
