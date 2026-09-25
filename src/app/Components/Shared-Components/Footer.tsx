import React from "react";
import Image from "next/image";
import logo from "@/app/assests/logo.png";

const Footer = () => {
  return (
    <div className=" bg-base-300  mt-4">

    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content flex justify-between items-center mt-7 p-4 container mx-auto">
  <aside className="grid-flow-col items-center">
        <Image
          src={logo}
          alt="Fit Log"
          width={35}
          height={10}
          className="object-contain"
        />
        <span className="font-bold text-2xl">FITLOG</span>
      </aside>
  <aside>
     <p className="text-sm text-gray-500 text-center">
      © {new Date().getFullYear()} FitLog - Workout Library. Train hard, log honest.
    </p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
