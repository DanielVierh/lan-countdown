import React from "react";

const DateBanner = ({ date, time }) => {
  return (
    <div className="date-banner">
      {date} <br /> {time}
    </div>
  );
};

export default DateBanner;
