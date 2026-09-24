"use client"

import { Workout } from '@/app/Type/Type';
import React from 'react';
interface DataProps{
    data : Workout
}
const SaveBtn = ({data}:DataProps) => {
    return (
        <div>
            <button className="flex flex justify-center items-center w-[200] border border-white/10 text-white py-3 rounded-xl">
              Save for later
            </button>
        </div>
    );
};

export default SaveBtn;