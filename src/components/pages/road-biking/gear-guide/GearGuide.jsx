import React from "react";
import CardGear from "../../../partials/CardGear";

const GearGuide = () => {
  return (
    <>
      {/* Gear Guide */}
      <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-20">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Road Biking Gear
            </h2>
            <p className="text-gray-600 mb-6">
              Having the right equipment can make all the difference in your
              riding experience and safety.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition">
              View Full Gear Guide
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <CardGear title={"Helmet"} />
              <CardGear title={"Bike Shoes"} />
              <CardGear title={"Jersey"} />
              <CardGear title={"Bottles"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GearGuide;
