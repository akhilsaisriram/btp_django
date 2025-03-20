import React, { useState, useEffect } from "react";
import "../bord.css";
import App_day from "./appliences_Pages/App_day";
import App_mon from "./appliences_Pages/App_mon";
import App_year from "./appliences_Pages/App_year"
const Appliences = ({ date }) => {
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
            {da === "1" && <App_day />}
            {da === "2" && <App_mon />}
            {da === "3" && <App_year />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appliences;
