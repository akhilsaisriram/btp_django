import React, { useState, useEffect } from "react";
import "../bord.css";
import Cost_days from "./cost_pages/Cost_days";
import Cost_mon from "./cost_pages/Cost_mon";
import Cost_years from "./cost_pages/Cost_years";

const Costdash = ({ date }) => {
  const [da, setDa] = useState(date);

  useEffect(() => {
    setDa(date);
  }, [date]);

  return (
    <div className="container-fluid">
      <div id="parent1" className="col-lg-15 col-xl-15">
        <div className="chart-card mb-15">
          <div className="chart-title" id="text1">
            COST
          </div>
          <div id="chart1" className="chart">
            {da === "1" && <Cost_days />}
            {da === "2" && <Cost_mon />}
            {da === "3" && <Cost_years />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Costdash;
