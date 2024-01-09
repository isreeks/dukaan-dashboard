import { Select } from "@/components/home/Select";
import Stats from "@/components/home/Stats";
import Transactions from "@/components/home/Transactions";
import Image from "next/image";

const time = [{ title: "Last Month" }, { title: "Last Year" }];

export default function Home() {
  return (
    <main className="py-4  md:py-8 px-4 md:px-12">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-[20px]">Overview</h3>
          <Select data={time} />
        </div>
        <Stats/>
      </div>
      <Transactions/>
    </main>
  );
}
