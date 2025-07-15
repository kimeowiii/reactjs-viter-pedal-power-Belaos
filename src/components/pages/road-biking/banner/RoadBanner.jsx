import React from "react";
import CardBanner from "../../../partials/CardBanner";

const RoadBanner = () => {
  return (
    <>
      <CardBanner
        bgColor={"bg-green-900"}
        image={"/img/roadbanner.webp"}
        alt={"Road biking hero"}
        title={"Road Biking"}
        description={" Speed, endurance, and the freedom of the open road"}
      />
    </>
  );
};

export default RoadBanner;
