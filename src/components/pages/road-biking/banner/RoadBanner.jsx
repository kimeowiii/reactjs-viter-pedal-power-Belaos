import React from "react";
import CardBanner from "../../../partials/CardBanner";

const RoadBanner = () => {
  return (
    <>
      <CardBanner
        bgColor={"bg-green-900"}
        image={
          "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
        }
        alt={"Road biking hero"}
        title={"Road Biking"}
        description={" Speed, endurance, and the freedom of the open road"}
      />
    </>
  );
};

export default RoadBanner;
