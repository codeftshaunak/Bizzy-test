import React from "react";
import select from "../../assets/select.png";
const DesktopNotification = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[8px] py-[20px] px-[24px] ">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#374151] text-[14px] font-[500]">
            Desktop Notification
          </p>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[8px]">
              <img width={"20px"} src={select} />
              <p className="text-[14px] text-[#374151] font-[400]">
                Send me emails with on how find talent my feeds{" "}
              </p>
            </div>
            <div className="flex gap-[8px]">
              <img width={"20px"} src={select} />
              <p className="text-[14px] text-[#374151] font-[400]">
                Send me emails with on how find talent my feeds{" "}
              </p>
            </div>
            <div className="flex gap-[8px]">
              <img width={"20px"} src={select} />
              <p className="text-[14px] text-[#374151] font-[400]">
                Send me emails with on how find talent my feeds{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-t-[#D1D5DB]" />
      <div className="flex flex-col gap-[8px] py-[20px] px-[24px] ">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#374151] text-[14px] font-[500]">
            Desktop Notification
          </p>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[8px]">
              <img width={"20px"} src={select} />
              <p className="text-[14px] text-[#374151] font-[400]">
                Send me emails with on how find talent my feeds{" "}
              </p>
            </div>
            <div className="flex gap-[8px]">
              <img width={"20px"} src={select} />
              <p className="text-[14px] text-[#374151] font-[400]">
                Send me emails with on how find talent my feeds{" "}
              </p>
            </div>
            <div className="flex gap-[8px]">
              <img width={"20px"} src={select} />
              <p className="text-[14px] text-[#374151] font-[400]">
                Send me emails with on how find talent my feeds{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNotification;
