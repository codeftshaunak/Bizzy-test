import React from "react";
import portfoliobg from "../../assets/portfoliobg.png";
const PortfolioCard = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div
        className=" h-[135px] w-[202px] rounded-[12px]"
        style={{ background: `url(${portfoliobg})`, backgroundSize: "contain" }}
      ></div>
      <p className="text-[14px] text-[#374151] font-[500]">Project #1</p>
    </div>
  );
};

export default PortfolioCard;
