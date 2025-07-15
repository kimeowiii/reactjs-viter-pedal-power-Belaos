import React from "react";
import CardRoute from "../../../partials/cardRoute";

const FeaturedRoutes = () => {
  return (
    <>
      {/* Featured Routes */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Featured Road Routes
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CardRoute
            image={"/img/discipline-1.webp"}
            alt={" Coastal Highway"}
            title={" Coastal Highway"}
            distance={"75 miles"}
            difficulty={"Intermediate"}
            elevation={"1,200 ft"}
          />

          <CardRoute
            image={"/img/events-1.webp"}
            alt={"Mountain Pass"}
            title={"Mountain Pass"}
            distance={"42 miles"}
            difficulty={"Advanced"}
            elevation={"5,800 ft"}
          />

          <CardRoute
            image={"/img/countryside.webp"}
            alt={"Countryside Loop"}
            title={"Countryside Loop"}
            distance={"30 miles"}
            difficulty={"Beginner"}
            elevation={"500 ft"}
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedRoutes;
