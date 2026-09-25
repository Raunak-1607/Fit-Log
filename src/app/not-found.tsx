import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
   <div className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 text-white">
  <div
    className="
      bg-[#13161c]
      border border-[#252a33]
      p-6 sm:p-8 md:p-10
      rounded-2xl
      text-center
      w-full
      max-w-lg
      flex flex-col
      items-center
    "
  >
    <h1
      className="
        text-6xl
        sm:text-7xl
        md:text-8xl
        font-black
        text-[#ccff00]
        mb-3
        sm:mb-4
        drop-shadow-md
      "
    >
      404
    </h1>

    <h2
      className="
        text-2xl
        sm:text-3xl
        font-bold
        mb-3
        sm:mb-4
      "
    >
      Page Not Found
    </h2>

    <p
      className="
        text-gray-500
        mb-6
        sm:mb-8
        text-sm
        sm:text-base
        md:text-lg
        leading-relaxed
        max-w-sm
      "
    >
      Oops! The page you are looking for doesn't exist.
    </p>

    <Link
      href="/"
      className="
        bg-[#ccff00]
        text-black
        font-bold
        px-6
        sm:px-8
        py-3
        rounded-xl
        hover:scale-105
        transition-transform
        duration-300
        text-sm
        sm:text-base
      "
    >
      Return to Dashboard
    </Link>
  </div>
</div>
  );
};

export default NotFound;
