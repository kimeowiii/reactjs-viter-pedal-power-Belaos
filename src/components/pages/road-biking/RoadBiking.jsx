import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import RoadBanner from "./banner/RoadBanner";
import FeaturedRoutes from "./featured-routes/FeaturedRoutes";
import GearGuide from "./gear-guide/GearGuide";
import TrainingTips from "./training-tips/TrainingTips";

const RoadBiking = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div>
            <RoadBanner />
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              <FeaturedRoutes />
              <GearGuide />
              <TrainingTips />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RoadBiking;
