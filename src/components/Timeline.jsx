import React from "react";
import data from "../content/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelinebox">
        {data.projects.map((i, index) => (
          <TimelineItem
            heading={i.title}
            text={i.date}
            index={index}
            key={i.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <div
    className={`timelineitem ${
      index % 2 === 0 ? "lefttimeline" : "righttimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);
export default Timeline;
