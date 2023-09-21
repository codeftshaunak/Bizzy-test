import React from "react";
import SkillCard from "./SkillCard";

const Security = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[8px] py-[20px] px-[24px] ">
        <p className="text-[#374151] text-[16px] font-[600]">Change Password</p>
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#374151] text-[14px] font-[500]">Old Password</p>
          <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
            <input
              type="text"
              className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
              placeholder="Title"
            />
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <div className="flex flex-col gap-[8px] w-full">
            <p className="text-[#374151] text-[14px] font-[500]">
              New Password
            </p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <input
                type="password"
                className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="New Password"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <p className="text-[#374151] text-[14px] font-[500]">
              Confirm New Password
            </p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <input
                type="password"
                className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="Confirm New Password"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 p-[24px] w-full border-t-[1px] border-t-[#F3F4F6] ">
          <button className="text-[14px] text-[#374151] font-[500] border-[1px] border-[#D1D5DB] py-[4px] px-[20px] rounded-md ">
            Cancel
          </button>
          <button className="text-[14px] bg-[#16A34A] text-[#fff] font-[500]  py-[4px] px-[20px] rounded-md ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
