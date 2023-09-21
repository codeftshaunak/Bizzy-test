import React from "react";
import ProfileContainer from "./ProfileContainer";
import { BsChevronRight } from "react-icons/bs";
import PaymentMethod from "./PaymentMethod";
import ContactSettings from "./ContactSettings";
import DesktopNotification from "./DesktopNotification";
import Security from "./Security";

const ProfileSettingTemplate = ({ children }) => {
  return (
    <ProfileContainer>
      <div className="w-full flex flex-col  gap-[30px]">
        <div className="flex gap-[16px] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            cursor={"pointer"}
          >
            <path
              d="M4.16699 10V15.8333C4.16699 16.7538 4.91318 17.5 5.83366 17.5H14.167C15.0875 17.5 15.8337 16.7538 15.8337 15.8333V10"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 17.4997V12.4997C7.5 11.5792 8.24619 10.833 9.16667 10.833H10.8333C11.7538 10.833 12.5 11.5792 12.5 12.4997V17.4997"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.16667 10H2.5L10 2.5L17.5 10H15.8333"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <BsChevronRight cursor={"pointer"} />
          <p className="text-[14px] text-[#374151] font-[400]">Settings</p>
        </div>
        <div className="flex w-full gap-[20px] ">
          <div className="flex flex-col flex-1 border-[1px]  border-[#D1D5DB] rounded-lg">
            <SettingsNav title={"Profile Settings"} active={true} />
            <SettingsNav title={"Billing and Payment"} />
            <SettingsNav title={"Account Information"} />
            <SettingsNav title={"Notification Settings"} />
            <SettingsNav title={"Password and Security"} />
          </div>
          <div className="flex flex-col flex-[2] border-[1px]   border-[#D1D5DB] rounded-lg">
            <Security />
            {/* <PaymentMethod />
            <ContactSettings />
            <DesktopNotification /> */}
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default ProfileSettingTemplate;

const SettingsNav = ({ title, noBorder, active }) => {
  return (
    <div
      className={`flex items-center text-[${active ? "#16A34A" : "#374151"
        }] justify-between py-[16px] border-b-[${!noBorder ? "1px" : "none"
        }] border-b-[${!noBorder ? "#D1D5DB" : "none"
        }] px-[24px] cursor-pointer `}
    >
      <p className={`text-[16px]  font-[500]`}>{title}</p>
      <BsChevronRight />
    </div>
  );
};
