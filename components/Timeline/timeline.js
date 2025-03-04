// MyTimeline.js
import React from "react";
import TimelineItem from "./TimelineItem";
import { timeline } from "./Content/timeline"; // Import the timeline data

const MyTimeline = () => {
  return (
    <div className="container mx-auto max-w-2xl my-14">
      <h2 className="text-2xl font-bold text-center mb-6">My Journey</h2>
      <div className="flex flex-col">
        {timeline.map((item, index) => (
          <TimelineItem key={`timeline-item-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyTimeline;
