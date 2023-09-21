import React from "react";
import SkillCard from "./SkillCard";
import ProfileSettingTemplate from "./ProfileSettingTemplate";

const UserProfileSetting = () => {
  return (
    <ProfileSettingTemplate>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px] py-[20px] px-[24px] ">
          <p className="text-[#374151] text-[16px] font-[600]">
            Basic Information
          </p>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#374151] text-[14px] font-[500]">Title</p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <input
                type="text"
                className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="Title"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#374151] text-[14px] font-[500]">Hourly Rate</p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <input
                type="text"
                className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="Rate in $"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#374151] text-[14px] font-[500]">Desription</p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <textarea
                type="text"
                className="w-full focus:outline-none h-[76px]  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="Describe your services here.."
              />
            </div>
          </div>
        </div>
        <hr className=" border-t-[green]" />
        <div className="flex flex-col gap-[8px] py-[20px] px-[24px] ">
          <p className="text-[14px] text-[#374151] font-[600]">Skills</p>

          <div className="grid grid-cols-3 gap-4">
            <SkillCard title={"Design"} />
            <SkillCard title={"Development"} />
            <SkillCard title={"Animator"} />
            <SkillCard title={"Sales"} />
            <SkillCard title={"Marketing"} />
            <SkillCard title={"Virtual Asst."} />
          </div>
        </div>
        <hr className=" border-t-[green]" />
        <div className="flex flex-col gap-[8px] py-[20px] px-[24px] ">
          <p className="text-[#374151] text-[16px] font-[600]">Education</p>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#374151] text-[14px] font-[500]">Degree Name</p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <input
                type="text"
                className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="Title"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#374151] text-[14px] font-[500]">Institution</p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <input
                type="text"
                className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="Rate in $"
              />
            </div>
          </div>
          <div className="flex gap-[8px]">
            <div className="flex flex-col gap-[8px] w-full">
              <p className="text-[#374151] text-[14px] font-[500]">
                Starting Date
              </p>
              <div className="w-[100%] flex items-center justify-between py-[2px] px-[12px] outline-none border-[1px] rounded-md">
                <input
                  type="text"
                  className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                  placeholder="Describe your services here.."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <rect
                    x="3.33301"
                    y="4.16699"
                    width="13.3333"
                    height="13.3333"
                    rx="1.33333"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.16699 12.4997H10.0003"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99967 12.5V15"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.33301 9.16667H16.6663"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3337 2.5V5.83333"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66667 2.5V5.83333"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <p className="text-[#374151] text-[14px] font-[500]">Ending Date</p>
              <div className="w-[100%] flex items-center justify-between  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
                <input
                  type="text"
                  className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                  placeholder="Describe your services here.."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <rect
                    x="3.33301"
                    y="4.16699"
                    width="13.3333"
                    height="13.3333"
                    rx="1.33333"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.16699 12.4997H10.0003"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99967 12.5V15"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.33301 9.16667H16.6663"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3337 2.5V5.83333"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66667 2.5V5.83333"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr className=" border-t-[green]" />
        <div className="flex flex-col gap-[8px] py-[20px] px-[24px] ">
          <p className="text-[#374151] text-[16px] font-[600]">Portfolio</p>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#374151] text-[14px] font-[500]">Headline</p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <input
                type="text"
                className="w-full focus:outline-none  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="Title"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="text-[#374151] text-[14px] font-[500]">Desription</p>
            <div className="w-[100%]  py-[2px] px-[12px] outline-none border-[1px] rounded-md">
              <textarea
                type="text"
                className="w-full focus:outline-none h-[76px]  text-[14px] text-[#9CA3AF] font-[400] border-[#D1D5DB] "
                placeholder="Describe your services here.."
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#374151] text-[14px] font-[500]">Attachments</p>
            <div className="w-[100%] cursor-pointer flex items-center bg-[#F0FDF4] justify-center py-[32px] px-[20px] border-dashed border-[#22C55E] border-[1px] rounded-md">
              <p className="text-[#374151] text-[14px] font-[400]">
                Drag or , <span className="text-[#16A34A]">upload</span> project
                Images
              </p>
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
    </ProfileSettingTemplate>
  );
};

export default UserProfileSetting;
