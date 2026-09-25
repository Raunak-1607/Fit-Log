import Image from "next/image";
import { Workout } from "@/app/Type/Type";
import AddBtn from "@/app/Components/Button/Add";
import SaveBtn from "@/app/Components/Button/Save";

const generateStaticParams = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data.map((workout: Workout) => {
    return {
      Id: String(workout.id),
    };
  });
};

const WorkoutPageDetails = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${encodeURIComponent(Id)}`,
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
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-w-0">
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[500px] min-w-0">
          <Image
            src={data.image}
            alt={data.name}
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="min-w-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white mb-3 wrap-break-word">
            {data.name}
          </h1>

          <p className="text-gray-400 mb-5">{data.description}</p>

          <div className="flex gap-3 mb-6 flex-wrap">
            {data.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-[#ccff00] text-black px-4 py-1 rounded-full text-sm font-bold"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="bg-[#16181c] rounded-xl overflow-hidden mb-7 w-full">
            {stats.map(([label, value], index) => (
              <div
                key={label}
                className={`flex items-center justify-between gap-4 px-4 sm:px-5 py-4 ${
                  index !== stats.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <span className="text-gray-500 text-xs sm:text-sm font-bold">
                  {label}
                </span>

                <span className="text-gray-200 text-sm sm:text-base text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-white text-xl sm:text-2xl font-black mb-4">
            INSTRUCTIONS
          </h2>

          <div className="space-y-4 mb-7">
            {data.instructions.map((instruction, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-gray-400 text-sm sm:text-base leading-6 sm:leading-7"
              >
                <span className="shrink-0">{index + 1}.</span>

                <span className="min-w-0 break-words">{instruction}</span>
              </div>
            ))}
          </div>

          
          <div className=" flex flex-col justify-center items-center sm:flex-row gap-3 sm:gap-4 w-full">
            <div className="w-full sm:w-auto flex justify-center">
              <AddBtn data={data} />
            </div>

            <div className="w-full sm:w-auto flex justify-center">
              <SaveBtn data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPageDetails;
