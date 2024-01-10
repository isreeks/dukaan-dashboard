"use client";
import { Key, useState } from "react";
import { Listbox } from "@headlessui/react";

type Data = { title: String | null | undefined };

export function Select({ data }: any) {
  const [selectedTime, setSelectedTime] = useState<Data>(data[0]);

  return (
    <div className=" relative">
      <Listbox value={selectedTime} onChange={setSelectedTime}>
        <Listbox.Button className="px-3 py-[6px] bg-white w-[137px] border justify-between text-sm flex items-center gap-2 rounded ">
          {selectedTime.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
              fill="#4D4D4D"
            />
          </svg>{" "}
        </Listbox.Button>
        <Listbox.Options className=" absolute w-full top-10 flex flex-col  gap-1 bg-white text-primary text-md p-2 rounded-md">
          {data.map((time: Data, i: Key) => (
            <Listbox.Option   className="cursor-pointer hover:bg-gray-400/20 text-[14px]  rounded-sm px-2 py-1" key={i} value={time}>
              {time.title}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
