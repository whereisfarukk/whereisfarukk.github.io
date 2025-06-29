// MyTimeline.js
import React from "react";
import TimelineItem from "./TimelineItem";
import { timeline } from "./Content/timeline"; // Import the timeline data
import { motion } from "motion/react";

const MyTimeline = () => {
    return (
        <div className="container mx-auto max-w-2xl my-14">
            <h2 className="relative text-3xl font-bold text-center mb-10 ">
                My{" "}
                <span className="relative group bg-gradient-to-br from-[rgba(76,255,180,0.3)] via-[rgba(76,255,180,0.9)] to-[rgba(76,255,180,0.3)] bg-clip-text text-transparent inline-block">
                    Journey
                    <img src="/gifs/explore.gif" alt="Journey GIF" className="absolute -top-24 left-1/2 -translate-x-1/2 w-30 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50" />
                </span>
                <svg width="75" height="62" viewBox="0 0 75 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute hidden sm:block top-0 left-[428px] top-[13px]">
                    <motion.path
                        // initial={{ pathLength: 0 }}
                        // whileInView={{ pathLength: 1 }}
                        // transition={{
                        //   duration: 1.25,
                        //   ease: "easeInOut",
                        // }}
                        d="M1 1C6.24431 1.21626 11.5365 2.05428 16.6516 3.13955C28.7596 5.70848 41.2898 9.45859 51.3287 17.0631C61.1747 24.5214 66.3737 34.4703 69.1034 46.2597C70.3557 51.6681 70.3959 56.1136 70.6176 61.434"
                        stroke="#D4D4D4"
                        stroke-width="0.5"
                        stroke-linecap="round"
                        stroke-dasharray="4 4"
                    ></motion.path>
                    <path d="M63 57.185C65.135 58.2982 67.2076 59.4555 69.2541 60.7235C70.1813 61.2979 70.997 62.1916 71.624 60.9045C72.5057 59.0948 73.0026 57.3294 74.5536 56" stroke="#D4D4D4" stroke-width="0.5" stroke-linecap="round"></path>
                </svg>
            </h2>
            <div className="flex flex-col">
                {timeline.map((item, index) => (
                    <TimelineItem key={`timeline-item-${index}`} item={item} />
                ))}
            </div>
        </div>
    );
};

export default MyTimeline;
