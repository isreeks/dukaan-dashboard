import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Navbar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payments - Dukaan",
  description: "Dukaan - Enterprise Ecommerce Platform for Businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full justify-between ">
          <div className=" lg:[20%] xl:w-[12%]">
          <Sidebar />
          </div>
          <div className=" w-full md:w-[94%]  lg:w-[88%]">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
