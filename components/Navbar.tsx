"use client";
import { Menu } from "@/constants/menu";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
const stores = [
  { name: "Nishyan", logo: "/logoOne.png", link: "#" },
  { name: "SuperStore", logo: "/logo.png", link: "#" },
  { name: "Gokart", logo: "/logoOne.png", link: "#" },
];
const Navbar = () => {
  const path = usePathname();

  const [selectedStore, setSelectedStore] = useState(stores[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className=" fixed md:sticky z-40 top-0 left-0">
      <aside
        className={` ${
          open ? " block " : " hidden "
        }  relative transition duration-100 md:block z-40`}
      >
        <div
          onClick={() => setOpen(false)}
          className="fixed  md:hidden w-full top-0 -z-10 left-0 h-screen bg-slate-400/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-2 right-2 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className=" bg-primary h-screen  items-center z-30   flex justify-between flex-col text-white  lg:px[10px] xl:px-[14px] py-[16px]">
          <div className=" flex flex-col gap-6">
            <div className="flex gap-4  items-center justify-between ">
              <div className="relative w-full px-3">
                <Listbox value={selectedStore} onChange={setSelectedStore}>
                  <Listbox.Button className="flex  gap-2 items-center justify-between">
                    <Image
                      src={selectedStore.logo}
                      width={39}
                      height={39}
                      className="bg-white rounded-md "
                      alt={""}
                    />
                    <div className="w-[108px] flex md:hidden lg:flex  flex-col items-start">
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
                      className="w-6 h-6 md:hidden lg:flex "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Listbox.Button>
                  <Listbox.Options className="absolute  top-12 flex flex-col  gap-1 bg-white text-primary text-md p-2 rounded-md">
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
            <div className="px-2">
              {Menu.map((menu, i) => (
                <Link
                  key={i}
                  className={`flex  items-center ${
                    menu.uri === path ? "bg-gray-100/20 rounded-[4px]" : ""
                  } md:px-1 lg:px-2 flex md:justify-center lg:justify-start py-2 gap-3 md:gap-0 lg:gap-3`}
                  href={menu.uri}
                >
                  <div className="px-1">{menu.icon}</div>{" "}
                  <p className=" flex md:hidden lg:flex text-sm">
                    {menu.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex  md:justify-center w-full rounded-md bg-gray-100/20 md:bg-transparent lg:bg-gray-100/20 lg:px-3 py-2  items-center gap-2">
            <div className="lg:p-1  bg-gray-100/50 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            <div className=" md:hidden lg:block">
              <p className="text-[14px] md:text-[12px] font-medium lg:text-[12px] ">
                Available credits
              </p>
              <p className="text-md font-medium">222.10</p>
            </div>
          </div>
        </div>
      </aside>

      <button
        onClick={() => setOpen(!open)}
        className=" fixed md:hidden bg-primary z-30 text-white p-1 rounded-e-md top-28"
      >
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
