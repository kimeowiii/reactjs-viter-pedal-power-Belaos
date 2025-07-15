import React from "react";
import CardBanner from "../../../partials/CardBanner";

const MtbBanner = () => {
  return (
    <>
      <CardBanner
        bgColor={"bg-blue-900"}
        image={"/img/mtb.webp"}
        alt={"Mountain biking hero"}
        title={" Mountain Biking"}
        description={" Trails, adrenaline, and outdoor adventure"}
      />
    </>
  );
};

export default MtbBanner;
