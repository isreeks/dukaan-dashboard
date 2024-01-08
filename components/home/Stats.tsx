import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between  gap-6">
      <div className="flex-1 bg-white shadow-md p-5 flex flex-col gap-4 rounded-md">
        <p className="text-[16px]">Online Orders</p>
        <p className="text-[32px]">231</p>
      </div>
      <div className="flex-1 bg-white shadow-md p-5 flex flex-col gap-4 rounded-md">
        <p className="text-[16px]">Amount received</p>
        <p className="text-[32px]">₹23,92,312.19</p>
      </div>
    </div>
  );
};

export default Stats;
