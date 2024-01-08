"use client";
import { Menu } from "@/constants/menu";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const stores = [
  { name: "Nishyan", logo: "/logo.png", link: "#" },
  { name: "SuperStore", logo: "/logo.png", link: "#" },
  { name: "Gokart", logo: "/logo.png", link: "#" },
];
const Navbar = () => {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  console.log(selectedStore);

  return (
    <div className="w-[15%] hidden  md:block z-40">
    <aside className=" bg-primary  items-center fixed flex justify-between flex-col text-white h-screen px-[14px] py-[16px]">
      <div className=" flex flex-col gap-6">
        <div className="flex gap-4  items-center justify-between ">
          <div className="relative w-full px-3">
            <Listbox value={selectedStore} onChange={setSelectedStore}>
              <Listbox.Button className="flex  w-[192px] items-center justify-between">
                <Image
                  src={selectedStore.logo}
                  width={39}
                  height={39}
                  className="bg-white rounded-md "
                  alt={""}
                />
                <div className="w-[108px] flex flex-col items-start">
                  <h3 className="text-[15px] font-medium ">
                    {selectedStore.name}
                  </h3>
                  <Link
                    className="text-[13px] text-gray-300 underline underline-offset-"
                    href={"#"}
                  >
                    Visit store
                  </Link>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Listbox.Button>
              <Listbox.Options className="absolute w-[192px] top-12 flex flex-col  gap-1 bg-white text-primary text-md p-2 rounded-md">
                {stores.map((store, i) => (
                  <Listbox.Option
                    className="cursor-pointer hover:bg-gray-400/20  rounded-sm px-2 py-1"
                    key={i}
                    value={store}
                  >
                    {store.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        </div>
        <div className="w-full">
          {Menu.map((menu, i) => (
            <Link
            key={i}
              className={`flex w-full items-center ${
                menu.title === "Payments" ? "bg-gray-100/20 rounded-[4px]" : ""
              }   px-4 py-2 gap-3`}
              href={""}
            >
              {menu.icon} <p className=" text-sm">{menu.title}</p>{" "}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex w-full rounded-md bg-gray-100/20 px-3 py-2  items-center gap-2">
        <div className="p-2 bg-gray-100/50 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm">Available credits</p>
          <p className="text-md font-medium">222.10</p>
        </div>
      </div>
    </aside>

    </div>
  );
};

export default Navbar;
