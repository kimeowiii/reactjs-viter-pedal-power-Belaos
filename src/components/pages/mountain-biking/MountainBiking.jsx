import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import MtbBanner from "./mtb-banner/MtbBanner";
import FeaturedTrails from "./featured-trails/FeaturedTrails";
import Skills from "./skills/Skills";

const MountainBiking = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div>
            <MtbBanner/>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              <FeaturedTrails/>
              <Skills/>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MountainBiking;
