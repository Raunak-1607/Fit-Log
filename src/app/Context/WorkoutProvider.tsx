
"use client"
import React, { createContext, useState } from 'react';
import { Workout } from '../Type/Type';

export interface ContextType{
    addPlan : Workout[],
    savePlan :Workout[],
    setAddPlan : React.Dispatch<React.SetStateAction<Workout[]>>;
    setSavePlan : React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<ContextType>({
   addPlan : [],
   setAddPlan : ()=>{},
   savePlan : [],
   setSavePlan : ()=>{}
  
})

interface ContextProps {
  children: React.ReactNode;
}
const WorkoutProvider = ({children} : ContextProps) => {
    const [addPlan , setAddPlan] = useState<Workout[]>([]);
    const [savePlan , setSavePlan]=useState<Workout[]>([]);

    const shared ={
        addPlan ,
        setAddPlan,
        savePlan,
        setSavePlan
    }
    return (
        <WorkoutContext.Provider value={shared}>{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;