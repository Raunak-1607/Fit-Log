"use client"

import { Workout } from '@/app/Type/Type';
import React from 'react';
interface DataProps{
    data : Workout
}
const AddBtn = ({data}:DataProps) => {
    return (
        <div>
            <button className="flex justify-center items-center bg-[#ccff00] text-black font-bold py-3 w-[200] rounded-xl">
              Add to today's plan
            </button>
        </div>
    );
};

export default AddBtn;