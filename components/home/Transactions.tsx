"use client";
import { transactions } from "@/constants/transactions";
import Link from "next/link";
import React, { useState } from "react";

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = transactions.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(transactions.length / recordsPerPage);

  const pageNumbers  = Array.from({ length: nPages }, (_, index) => index + 1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h3 className="text-xl pt-8 pb-5">Transactions | This Month</h3>
      <div className="bg-white p-[12px] rounded-md">
        <div className=" flex justify-between pb-3 gap-3 items-center ">
          <div className="flex rounded-[4px] gap-2 border px-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_48520_2526)">
                <path
                  d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
                  fill="#808080"
                />
              </g>
              <defs>
                <clipPath id="clip0_48520_2526">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              className=" w-full py-2 bg-transparent focus:outline-none"
              placeholder="Search by order ID..."
              type="text"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 border px-3 py-2 rounded-[4px]">
              Sort{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>
            <button className="flex items-center gap-1 border px-3 py-2 rounded-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto  divide-gray-200 ">
            <thead className=" w-full bg-[#F2F2F2] ">
              <tr className="">
                <th className=" px-3 md:px-6 py-1 md:py-3  text-start text-xs md:text-sm font-medium text-[#4D4D4D]">
                  Order ID
                </th>
                <th className=" inline-flex items-center gap-1 px-3 md:px-6 py-1 md:py-3 text-start text-xs md:text-sm font-medium text-[#4D4D4D]">
                  Order date
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </th>
                <th className=" px-3 md:px-6 py-1 md:py-3  text-end text-xs md:text-sm font-medium text-[#4D4D4D]">
                  Order amount
                </th>
                <th className=" px-3 md:px-6 py-1 md:py-3 text-end text-xs md:text-sm font-medium text-[#4D4D4D]">
                  Transaction fees
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 ">
              {currentRecords.map((data, i) => (
                <tr key={i}>
                  <td className="text-[#146EB4] px-6 py-3 text-start text-sm font-medium">
                    <Link href={""}>{data.orderId}</Link>
                  </td>
                  <td className=" px-6 py-3 text-start text-sm font-medium text-[#1A181E]">
                    {data.orderDate}
                  </td>
                  <td className=" px-6 py-3 text-end text-sm font-medium text-[#1A181E]">
                    {data.orderAmount}
                  </td>
                  <td className=" px-6 py-3 text-end text-sm font-medium text-[#1A181E]">
                    {data.transactionFees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full px-6 pt-8 flex justify-center">
            <div className=" inline-flex gap-2">
              <button
                onClick={prevPage}
                className="flex items-center border  px-2 py-1 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
                    fill="#4D4D4D"
                  />
                </svg>
                Previous
              </button>
              {pageNumbers.map((num) => (
                <button
                key={num}
                  onClick={() => {
                    setCurrentPage(num);
                  }}
                  className={`px-3 py-1 ${
                    num === currentPage
                      ? "bg-[#146EB4] rounded-md text-white"
                      : ""
                  }`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={nextPage}
                className="flex items-center border  px-2 py-1 rounded-md"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
