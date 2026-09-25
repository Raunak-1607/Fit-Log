"use client";
import React, { createContext, useEffect, useState } from "react";
import { Workout } from "../Type/Type";

export interface ContextType {
  addPlan: Workout[];
  savePlan: Workout[];
  setAddPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  setSavePlan: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<ContextType>({
  addPlan: [],
  setAddPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const WorkoutProvider = ({ children }: ContextProps) => {
  const [addPlan, setAddPlan] = useState<Workout[]>([]);
  const [savePlan, setSavePlan] = useState<Workout[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  
  useEffect(() => {
    try {
      const savedAddPlan = localStorage.getItem("addPlan");
      const savedSavePlan = localStorage.getItem("savePlan");

      if (savedAddPlan) {
        setAddPlan(JSON.parse(savedAddPlan));
      }
      if (savedSavePlan) {
        setSavePlan(JSON.parse(savedSavePlan));
      }
    } catch (error) {
      console.error("Failed to load plans from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("addPlan", JSON.stringify(addPlan));
    }
  }, [addPlan, isLoaded]);

  
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("savePlan", JSON.stringify(savePlan));
    }
  }, [savePlan, isLoaded]);

  const shared = {
    addPlan,
    setAddPlan,
    savePlan,
    setSavePlan,
  };

  return (
    <WorkoutContext.Provider value={shared}>{children}</WorkoutContext.Provider>
  );
};

export default WorkoutProvider;