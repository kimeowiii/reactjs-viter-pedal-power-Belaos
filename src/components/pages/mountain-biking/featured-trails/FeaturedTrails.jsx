import React from "react";
import CardTrail from "../../../partials/CardTrail";

const FeaturedTrails = () => {
  return (
    <>
      {/* Featured Trails */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Must-Ride Trails
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <CardTrail
            image={"/img/events-2.webp"}
            alt={"Whistler Bike Park"}
            title={"Whistler Bike Park"}
            location={"British Columbia, Canada"}
            level={"Expert"}
            description={
              "The world's premier mountain bike park with trails for all skill levels and legendary downhill courses."
            }
            distance={"Over 50 trails"}
          />
          <CardTrail
            image={"/img/moab.webp"}
            alt={"Moab Slickrock"}
            title={"Moab Slickrock"}
            location={"Utah, USA"}
            level={"Intermediate-Advanced"}
            description={
              "The iconic trail with grippy sandstone and rollercoaster-like terrain that defines mountain biking in the desert."
            }
            distance={"10.6 mile loop"}
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedTrails;
