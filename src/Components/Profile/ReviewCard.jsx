import React from "react";
import Star from "./Star";

const ReviewCard = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-[16px] text-[#374151] font-[500]">
        Update our site design with a figma
      </p>
      <div className="flex gap-[8px]">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <p className="text-[#374151] text-[14px] font-[400]">5.0</p>
      </div>
      <p className="text-[#374151] text-[14px] font-[400]">
        "He is a very efficient UI/UX designer, and we enjoy working with him.
        He grasps the project needs very quickly and punctually delivers
        results. Communication and collaboration with him has always been very
        smooth."
      </p>
      <p className="text-[#374151] text-[14px] font-[400]">2022-2022</p>
    </div>
  );
};

export default ReviewCard;
