import React from "react";
import CardSkills from "../../../partials/CardSkills";

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Essential MTB Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <CardSkills
            svg={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
            title={"Body Position"}
            description={
              "Stay centered on the bike with bent elbows and knees to absorb and maintain control."
            }
          />

          <CardSkills
            svg={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            }
            title={"Braking Control"}
            description={
              " Use both brakes evenly, with more front brake on descents. Avoid locking wheels."
            }
          />

          <CardSkills
            svg={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            }
            title={"Cornering"}
            description={
              "Look through the turn, lean the bike (not your body), and keep pedals level."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
