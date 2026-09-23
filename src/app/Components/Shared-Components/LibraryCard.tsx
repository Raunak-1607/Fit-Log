import React from 'react';
import { Workout } from '@/app/Type/Type';
import Image from 'next/image';
import Link from 'next/link';

interface LibraryCardProps {
  data: Workout;
}

const LibraryCard = ({ data }: LibraryCardProps) => {
  return (
    <Link href={`/workout/${data.id}`} className="block h-full w-full">
      <div className="w-full h-full bg-[#16181C] rounded-2xl overflow-hidden border border-white/5 flex flex-col transition-transform hover:scale-[1.02] duration-200 cursor-pointer shadow-lg">
        {/* Image Container */}
        <div className="w-full aspect-[4/3] relative">
          <Image 
            src={data?.image || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"} 
            alt={data?.name || "Workout"} 
            fill 
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="p-5 flex flex-col gap-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {data?.muscleGroups?.map((tag, index) => (
              <span 
                key={index} 
                className="bg-[#ccff00] text-black text-xs font-black uppercase px-3 py-1 rounded-full tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Subtitle */}
          <div className="flex flex-col gap-1 mt-1">
            <h2 className="text-white text-xl font-black uppercase tracking-tight leading-tight line-clamp-2">
              {data?.name || "BARBELL BENCH PRESS"}
            </h2>
            <p className="text-[#a1a1aa] text-sm">
              {data?.equipment || "Barbell"}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 my-2"></div>

          {/* Footer Stats */}
          <div className="flex items-center gap-5 text-[#a1a1aa] text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{data?.duration || 25} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
              </svg>
              <span>{data?.caloriesBurned || 180} kcal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>{data?.rating || "4.8"}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;