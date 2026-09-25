import Image from "next/image";
import { Workout } from "@/app/Type/Type";
import AddBtn from "@/app/Components/Button/Add";
import SaveBtn from "@/app/Components/Button/Save";


const generateStaticParams = async()=>{
  const res =await fetch("https://api.abcz.workers.dev/api/fitlog")
  const data = await res.json()
   return (
    data.map((workout:Workout) =>{
      return{
        Id : String(workout.id)
      }

    })
   )
  
}

const WorkoutPageDetails = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${encodeURIComponent(Id)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const data: Workout = await res.json();

  const stats = [
    ["EQUIPMENT", data.equipment],
    ["DIFFICULTY", data.difficulty],
    ["SETS", data.sets],
    ["REPS", data.reps],
    ["DURATION", `${data.duration} min`],
    ["CALORIES", `${data.caloriesBurned} kcal`],
    ["RATING", data.rating],
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-6 my-8">
      <div className="grid lg:grid-cols-2 gap-12">

        
        <div className="relative h-[500px]">
          <Image
            src={data.image}
            alt={data.name}
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>

        
        <div>
          <h1 className="text-4xl font-black uppercase text-white mb-3">
            {data.name}
          </h1>

          <p className="text-gray-400 mb-5">
            {data.description}
          </p>

         
          <div className="flex gap-3 mb-6">
            {data.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-[#ccff00] text-black px-4 py-1 rounded-full text-sm font-bold"
              >
                {muscle}
              </span>
            ))}
          </div>

         
          <div className="bg-[#16181c] rounded-xl overflow-hidden mb-7">
            {stats.map(([label, value], index) => (
              <div
                key={label}
                className={`flex justify-between px-5 py-4 ${
                  index !== stats.length - 1
                    ? "border-b border-white/5"
                    : ""
                }`}
              >
                <span className="text-gray-500 text-xs font-bold">
                  {label}
                </span>

                <span className="text-gray-200 text-sm">
                  {value}
                </span>
              </div>
            ))}
          </div>

          
          <h2 className="text-white font-black mb-4">
            INSTRUCTIONS
          </h2>

          <div className="space-y-3 mb-7">
            {data.instructions.map((instruction, index) => (
              <div
                key={index}
                className="flex gap-3 text-gray-400"
              >
                <span>{index + 1}.</span>
                <span>{instruction}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <AddBtn data={data}/>
            <SaveBtn data ={data}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkoutPageDetails;