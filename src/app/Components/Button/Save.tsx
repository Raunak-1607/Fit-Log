"use client";

import { WorkoutContext } from "@/app/Context/WorkoutProvider";
import { Workout } from "@/app/Type/Type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
interface DataProps {
  data: Workout;
}
const SaveBtn = ({ data }: DataProps) => {
  const { savePlan, setSavePlan } = useContext(WorkoutContext);
  const handleBtn = () => {
     
        const isAlreadySaved = savePlan.some((b) => b.id === data.id);

       if (isAlreadySaved) {
            toast.error("You have already saved this book to save list");
        } else {
            setSavePlan([...savePlan, data]);
            toast.success("Book saved to save list successfully");
        }
    
    console.log("Save btn trigered");
  };
  return (
    <div>
      <button
        className="flex flex justify-center items-center w-[200] border border-white/10 text-white py-3 rounded-xl"
        onClick={() => handleBtn()}
      >
        Save for later
      </button>
    </div>
  );
};

export default SaveBtn;
