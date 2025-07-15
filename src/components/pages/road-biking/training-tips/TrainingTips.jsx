import React from "react";
import CardTip from "../../../partials/CardTip";

const TrainingTips = () => {
  return (
    <>
      {/* Training Tips */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Training Tips
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CardTip
            number={"01"}
            title={"Cadence Matters"}
            description={
              " Aim for a cadence of 80-100 RPM to improve efficiency and reduce fatigue. Use your gears to maintain this range on different terrain."
            }
          />
          <CardTip
            number={"02"}
            title={"Fuel Properly"}
            description={
              "Consume 30-60g of carbohydrates per hour on rides longer than 90 minutes to maintain energy levels."
            }
          />
          <CardTip
            number={"03"}
            title={"Group Riding"}
            description={
              "When drafting, maintain a consistent speed and avoid sudden braking. Communicate clearly with hand signals andverbal calls."
            }
          />
          <CardTip
            number={"04"}
            title={"Hill Climbing"}
            description={
              " Shift before you need to, stay seated on moderate grades, and focus on steady breathing and pedal strokes."
            }
          />
        </div>
      </div>
    </>
  );
};

export default TrainingTips;
