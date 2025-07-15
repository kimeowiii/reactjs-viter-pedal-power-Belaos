import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src="/img/roadbiking.webp"
          alt="Cycling hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Ride Beyond Limits
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Discover the world on two wheels with our expert guides and
              community
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/road-biking"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition transform hover:scale-105"
              >
                Road Biking
              </Link>
              <Link
                to="/mountain-biking"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition transform hover:scale-105"
              >
                Mountain Biking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
