"use client";
import { Workout } from '@/app/Type/Type';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WorkoutContext } from '@/app/Context/WorkoutProvider';
import { RxCross1 } from "react-icons/rx";

interface PlanProps {
    plan: Workout;
    isDone?: boolean;
}

const ListedCard = ({ plan, isDone }: PlanProps) => {
    const { addPlan, setAddPlan, savePlan, setSavePlan } = useContext(WorkoutContext);

    const handleRemove = () => {
        setAddPlan(addPlan.filter(item => item.id !== plan.id));
        setSavePlan(savePlan.filter(item => item.id !== plan.id));
    };

    const handleMarkAsDone = () => {
        // Remove from addPlan and add to savePlan if not already there
        setAddPlan(addPlan.filter(item => item.id !== plan.id));
        if (!savePlan.find(item => item.id === plan.id)) {
            setSavePlan([...savePlan, plan]);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-[#1c1c24] rounded-2xl mb-4 border border-[#2b2b36] shadow-sm">
            <div className="flex items-center gap-4">
                <div className="w-[120px] h-[80px] relative rounded-xl overflow-hidden shrink-0 bg-gray-800">
                    {plan.image && (
                        <Image 
                            src={plan.image} 
                            alt={plan.name} 
                            fill 
                            className="object-cover"
                        />
                    )}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg uppercase tracking-wide">{plan.name}</h3>
                    <p className="text-gray-400 text-sm font-medium">{plan.equipment}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-400 font-medium">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-[#d4ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            {plan.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="text-[#d4ff00] text-sm">🔥</span>
                            {plan.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="text-[#d4ff00] text-sm">⭐</span>
                            {plan.rating}
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <Link href={`/workouts/${plan.id}`} className="px-5 py-2 border border-gray-600 rounded-full text-gray-300 text-sm font-medium hover:bg-gray-700 transition">
                    View Details
                </Link>
                
                {!isDone && (
                    <button 
                        onClick={handleMarkAsDone}
                        className="flex items-center gap-2 px-5 py-2 bg-[#d4ff00] hover:bg-[#bce600] text-black rounded-full text-sm font-bold transition shadow-sm"
                    >
                        <svg className="w-4 h-4 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        Mark as Done
                    </button>
                )}

                <button onClick={handleRemove} className="text-gray-500 hover:text-gray-300 transition p-2 rounded-full hover:bg-gray-800 ml-2">
                    <RxCross1 /></button>
            </div>
        </div>
    );
};

export default ListedCard;