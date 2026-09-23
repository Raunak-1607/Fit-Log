import React from "react";

import { Workout } from "@/app/Type/Type";
import { Bebas_Neue, Inter } from "next/font/google";
import LibraryCard from "../Components/Shared-Components/LibraryCard";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const getLibrary = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Data Fetch Failed");
  }
};

const Library = async () => {
  const library = await getLibrary();
  console.log(library, "library");
  return (
    <div className="container mx-auto mt-15">
      <div className="mb-11">
        <h1 className={`${bebas.className} text-5xl uppercase font-bold`}>THE LIBRARY</h1>
        <p className={`${inter.className} text-lg text-gray-400`}>
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {library.map((data: Workout, ind: number) => (
          <LibraryCard key={ind} data={data}></LibraryCard>
        ))}
      </div>
    </div>
  );
};

export default Library;
