"use client";

import { WorkoutContext } from "@/app/Context/WorkoutProvider";
import { Workout } from "@/app/Type/Type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { FaCalendarPlus } from "react-icons/fa";
interface DataProps {
  data: Workout;
}
const AddBtn = ({ data }: DataProps) => {
  const { addPlan, setAddPlan } = useContext(WorkoutContext);
  const handleBtn = () => {
    const isAlreadyAdd = addPlan.some((b) => b.id === data.id);

    if (isAlreadyAdd) {
      toast.error(`You have already Add ${data.name}`);
    } else {
      setAddPlan([...addPlan, data]);
      toast.success(`${data.name} added successfully`);
    }
    console.log("Add btn triggered");
  };
  return (
    <div>
      <button
        className="flex justify-center items-center gap-2 bg-[#ccff00] text-black font-bold py-3 w-[200px] rounded-xl"
        onClick={() => handleBtn()}
      >
        <FaCalendarPlus />
        Add to today's plan
      </button>
    </div>
  );
};

export default AddBtn;
