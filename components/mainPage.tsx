"use client";

import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css";
// my components
import { Detail } from "./detail";
import { Sidebar } from "./sidebar";
import MobileCard from "./mobile";

const MainPage = () => {
  // useEffect for AOS
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden md:overflow-hidden h-screen">
      {/* mobile card */}
      <div className="block md:hidden">
        <MobileCard/>
      </div>

      {/* side bar */}
      <div data-aos="fade-up" className="hidden md:block md:w-1/5">
        <Sidebar />
      </div>
      {/* main */}
      <div data-aos="fade-up" className="w-full z-10">
        <Detail />
      </div>
    </div>
  );
};

export default MainPage;
