"use client";

import React, { useContext } from "react";
import logo from "@/app/assests/logo.png";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/app/Context/WorkoutProvider";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { addPlan, savePlan } = useContext(WorkoutContext);
  const pathName = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-3xl ${pathName === "/" ? "text-[#ccff00] bg-[#18250F] " : "text-gray-300 hover:text-white"}`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/Components/My-Plan"
          className={`rounded-3xl ${pathName === "/Components/My-Plan" ? "text-[#ccff00] bg-[#18250F] " : "text-gray-300 hover:text-white"}`}
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <Link href="/" className="btn btn-ghost px-2 sm:px-4 text-xl hover:bg-transparent hover:text-inherit">
              <Image
                src={logo}
                alt="Fit Log"
                width={35}
                height={35}
                className="object-contain"
              />

              <span className="font-bold text-left sm:text-2xl">FITLOG</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-4 ">
          <Link href="/Components/My-Plan " className="flex gap-2">
            {" "}
            <span className="text-gray-300">Plan</span>
            <span className=" w-8 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-bold">
              {addPlan.length}
            </span>
          </Link>
          <Link href="/Components/My-Plan " className="flex gap-2">
            {" "}
            <span className="text-gray-300">Saved</span>
            <span className=" w-8 rounded-full border-gray-500 border-1 text-white flex items-center justify-center font-bold">
              {savePlan.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
