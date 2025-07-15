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
            image={
              "https://images.unsplash.com/photo-1531045535792-b515d59c3d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            }
            alt={" Coastal Highway"}
            title={" Coastal Highway"}
            distance={"75 miles"}
            difficulty={"Intermediate"}
            elevation={"1,200 ft"}
          />

          <CardRoute
            image={
              "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            }
            alt={"Mountain Pass"}
            title={"Mountain Pass"}
            distance={"42 miles"}
            difficulty={"Advanced"}
            elevation={"5,800 ft"}
          />

          <CardRoute
            image={
              "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            }
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
