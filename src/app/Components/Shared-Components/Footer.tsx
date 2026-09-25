import React from "react";
import Image from "next/image";
import logo from "@/app/assests/logo.png";

const Footer = () => {
  return (
   <div className="bg-base-300 mt-4">
  <footer className="footer footer-center bg-base-300 text-base-content container mx-auto mt-7 p-4">
    
    <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
      
      
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Fit Log"
          width={35}
          height={35}
          className="object-contain"
        />

        <span className="font-bold text-xl sm:text-2xl">
          FITLOG
        </span>
      </div>

      
      <p className="text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} FitLog - Workout Library. Train hard, log honest.
      </p>

    </div>
  </footer>
</div>
  );
};

export default Footer;
