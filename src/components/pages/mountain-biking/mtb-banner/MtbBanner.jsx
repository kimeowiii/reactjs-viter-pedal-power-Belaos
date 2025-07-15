import React from "react";
import CardBanner from "../../../partials/CardBanner";

const MtbBanner = () => {
  return (
    <>
      <CardBanner
        bgColor={"bg-blue-900"}
        image={
          "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
        }
        alt={"Mountain biking hero"}
        title={" Mountain Biking"}
        description={" Trails, adrenaline, and outdoor adventure"}
      />
    </>
  );
};

export default MtbBanner;
