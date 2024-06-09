import React from "react";

export default function GridBackgroundDemo() {
  return (
    <>
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-8">
          Updating...
      </p>      
        <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center bg-yellow-400 font-bold text-3xl z-50 text-black">
          Under maintenance
      </footer>
      </div>

    </>
  );
}