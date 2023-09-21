import React from "react";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-[16px] py-[20px] px-[24px]">
      <p className="text-[#374151] text-[16px] font-[600]">Payment Methods</p>
      <PaymentCard />
      <PaymentCard />
      <PaymentCard />
      <button className="text-[14px] w-[250px] items-center gap-[8px] flex bg-[#16A34A] text-[#fff] font-[500]  py-[4px] px-[20px] rounded-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.99984 3.33301V12.6663"
            stroke="white"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.3335 8.00033H12.6668"
            stroke="white"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Add new payment method</p>
      </button>
    </div>
  );
};

export default PaymentMethod;

const PaymentCard = () => {
  return (
    <div className="flex items-center justify-between p-[12px] border-[1px] border-[#D1D5DB] rounded-[12px] ">
      <div className="flex items-center gap-[8px] ">
        <div className="flex items-center justify-center w-[42px]  h-[42px] rounded-[10px] bg-[#F0FDF4]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0154 4.19434H17.5525C19.0022 4.19432 20.1708 4.1943 21.0898 4.31787C22.0441 4.44615 22.8475 4.72061 23.4855 5.35869C24.1237 5.99679 24.3982 6.8002 24.5264 7.7544C24.6499 8.67348 24.6499 9.84204 24.6499 11.2918V12.448C24.6499 13.4067 24.6499 14.1797 24.5934 14.8034C24.5351 15.4462 24.4118 16.0078 24.1173 16.518C23.7685 17.1223 23.2666 17.6242 22.6623 17.973C22.152 18.2675 21.5904 18.3908 20.9477 18.4491C20.324 18.5056 19.5509 18.5056 18.5923 18.5056H16.998C17.3137 17.9599 17.4943 17.3263 17.4943 16.6505C17.4943 14.6013 15.8331 12.9401 13.784 12.9401C11.7348 12.9401 10.0736 14.6013 10.0736 16.6505C10.0736 17.3263 10.2543 17.9599 10.57 18.5056H8.9756C8.01701 18.5056 7.24389 18.5056 6.62025 18.4491C5.97746 18.3908 5.41582 18.2675 4.90565 17.973C4.30132 17.6242 3.79947 17.1223 3.45056 16.518C3.15601 16.0078 3.03274 15.4462 2.97447 14.8034C2.91795 14.1797 2.91796 13.4067 2.91797 12.4481V11.2918C2.91795 9.84206 2.91793 8.67347 3.04149 7.7544C3.16978 6.8002 3.44423 5.99679 4.08233 5.35869C4.72041 4.72061 5.52383 4.44615 6.47804 4.31787C7.39709 4.1943 8.56569 4.19432 10.0154 4.19434ZM8.48347 6.84458C8.04436 6.84458 7.6884 7.20055 7.6884 7.63965C7.6884 8.07876 8.04436 8.43472 8.48347 8.43472H19.0844C19.5235 8.43472 19.8795 8.07876 19.8795 7.63965C19.8795 7.20055 19.5235 6.84458 19.0844 6.84458H8.48347ZM9.80859 10.8199C9.80859 10.3808 10.1646 10.0249 10.6037 10.0249H16.9642C17.4033 10.0249 17.7593 10.3808 17.7593 10.8199C17.7593 11.2591 17.4033 11.615 16.9642 11.615H10.6037C10.1646 11.615 9.80859 11.2591 9.80859 10.8199Z"
              fill="#16A34A"
            />
            <path
              d="M11.8678 19.8281L11.477 22.3688C11.3285 23.3346 11.2541 23.8176 11.5336 24.0054C11.8131 24.1932 12.2322 23.9417 13.0702 23.4389L13.2384 23.338C13.5042 23.1786 13.637 23.0988 13.7839 23.0988C13.9307 23.0988 14.0635 23.1786 14.3293 23.338L14.4975 23.4389C15.3355 23.9417 15.7546 24.1932 16.034 24.0054C16.3136 23.8176 16.2392 23.3346 16.0907 22.3688L15.6999 19.8281C15.1406 20.1661 14.4849 20.3605 13.7839 20.3605C13.0828 20.3605 12.4271 20.1661 11.8678 19.8281Z"
              fill="#16A34A"
            />
            <path
              d="M13.7843 14.5303C12.6133 14.5303 11.6641 15.4795 11.6641 16.6505C11.6641 17.8214 12.6133 18.7707 13.7843 18.7707C14.9552 18.7707 15.9044 17.8214 15.9044 16.6505C15.9044 15.4795 14.9552 14.5303 13.7843 14.5303Z"
              fill="#16A34A"
            />
          </svg>
        </div>
        <div className="flex-col gap-[4px]">
          <p className="text-[#374151] text-[16px] font-[600]">
            Master Card ***7765
          </p>
          <p className="text-[#6B7280] text-[14px] font-[500]">06/27</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center">
        <div className="flex items-center justify-center w-[28px] h-[28px] bg-[#F9FAFB] rounded-[6px] border-[1px] border-[#D1D5DB]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.66699 13.3332H5.33366L12.3337 6.33321C13.07 5.59683 13.07 4.40292 12.3337 3.66654C11.5973 2.93016 10.4034 2.93016 9.66699 3.66654L2.66699 10.6665V13.3332"
              stroke="#6B7280"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 4.33301L11.6667 6.99967"
              stroke="#6B7280"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center w-[28px] h-[28px] bg-[#F9FAFB] rounded-[6px] border-[1px] border-[#D1D5DB]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.33333 7.33301V11.333"
              stroke="#6B7280"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66634 7.33301V11.333"
              stroke="#6B7280"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.66699 4.66634H13.3337"
              stroke="#6B7280"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33301 4.66699L3.99967 12.667C3.99967 13.4034 4.59663 14.0003 5.33301 14.0003H10.6663C11.4027 14.0003 11.9997 13.4034 11.9997 12.667L12.6663 4.66699"
              stroke="#6B7280"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 4.66667V2.66667C6 2.29848 6.29848 2 6.66667 2H9.33333C9.70152 2 10 2.29848 10 2.66667V4.66667"
              stroke="#6B7280"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
