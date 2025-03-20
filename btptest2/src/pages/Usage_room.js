import React, { useState, useEffect } from "react";
import "../bord.css";
import Use_day from "./usage_room/Use_day";
import Use_mon from "./usage_room/Use_mon";
import Use_year from "./usage_room/Use_year";
const Usage_room = ({ date }) => {
  const [da, setDa] = useState(date);

  useEffect(() => {
    setDa(date);
  }, [date]);

  return (
    <div className="container-fluid">
      <div id="parent1" className="col-lg-15 col-xl-15">
        <div className="chart-card mb-15">
          <div className="chart-title" id="text1">
          APPLIANCES
          </div>
          <div id="chart1" className="chart">
            {da === "1" && <Use_day />}
            {da === "2" && <Use_mon />}
            {da === "3" && <Use_year />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage_room;
