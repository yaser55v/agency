import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="relative bg-slate font-body">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center">
            <h2 className="mb-6 font-sans text-5xl font-bold tracking-tight text-softGold sm:text-9xl sm:leading-none animate-heroTitle">
            LOREM
            </h2>
            <p className="mb-6 text-2xl font-thin tracking-wide text-softGold md:text-4xl">
              Lorem ipsum dolor sit amet.
            </p>

            <div className="flex justify-center flex-col my-20 lg:flex-row space-y-3 lg:space-y-0">
              <Link
                to="/sign"
                className="block px-4 py-2 text-sm font-semibold text-center text-slate transition-colors duration-200 transform bg-softGold rounded-md hover:bg-yellow-200"
              >
                Sign Up
              </Link>
              <Link
                to="/sign"
                className="block px-3 py-2 text-sm font-semibold text-center text-slate transition-colors duration-200 transform bg-softGold rounded-md lg:mx-4 hover:bg-softGold"
              >
                Sign In
              </Link>
            </div>

            <button
              type="button"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 animate-bounce h-10 mx-auto text-softGold border border-softGold rounded-full"
              onClick={() => handleScroll()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
                className="text-softGold"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
