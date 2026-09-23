import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/app/Type/Type";

interface LibraryCardProps {
  data: Workout;
}

const LibraryCard = ({ data }: LibraryCardProps) => {
  return (
    <Link href={`/Library/${data.id}`}>
      <div className="bg-[#16181C] rounded-2xl overflow-hidden border border-white/5 hover:scale-[1.02] transition duration-200">

       
        <Image
          src={data.image}
          alt={data.name}
          width={400}
          height={300}
          className="w-full aspect-[4/3] object-cover"
        />

       
        <div className="p-5">

          
          <div className="flex gap-2 mb-4">
            {data.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
              >
                {muscle}
              </span>
            ))}
          </div>

          
          <h2 className="text-white text-xl font-black uppercase">
            {data.name}
          </h2>

         
          <p className="text-gray-400 text-sm mt-1">
            {data.equipment}
          </p>

          
          <div className="border-t border-white/5 my-4" />

          {/* Workout Info */}
          <div className="flex gap-5 text-gray-400 text-sm">

            <span>◷ {data.duration} min</span>

            <span>🔥 {data.caloriesBurned} kcal</span>

            <span>☆ {data.rating}</span>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;