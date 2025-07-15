import React from "react";
import CardDiscipline from "../../../partials/CardDiscipline";

const Features = () => {
  return (
    <>
      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Cycling Disciplines
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Whether you prefer smooth pavement or rugged trails, we've got you
            covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <CardDiscipline
            image={"/img/discipline-1.webp"}
            alt={"Road biking"}
            title={"Road Biking"}
            description={"Speed, endurance, and the open road"}
            link={"/road-biking"}
            textColor={"text-green-700"}
          />

          <CardDiscipline
            image={"/img/mtb.webp"}
            alt={"Mountain biking"}
            title={"Mountain biking"}
            description={"Trails, adrenaline, and outdoor adventure"}
            link={"/mountain-biking"}
            textColor={"text-blue-700"}
          />
        </div>
      </div>
    </>
  );
};

export default Features;
