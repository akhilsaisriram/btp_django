import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import { BarChart } from '@mui/x-charts/BarChart';
import { BarChart } from "@mui/x-charts/BarChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Chat.css";
const Cost_days = () => {
  //   const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  // const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  // const xLabels = [
  //   'Page A',
  //   'Page B',
  //   'Page C',
  //   'Page D',
  //   'Page E',
  //   'Page F',
  //   'Page G',
  // ];
  const uData = Array.from({ length: 24 }, (_, index) =>
    Math.floor(Math.random() * 10000)
  );
  const pData = Array.from({ length: 24 }, (_, index) =>
    Math.floor(Math.random() * 10000)
  );
  const uaData = Array.from({ length: 24 }, (_, index) =>
  Math.floor(Math.random() * 10000)
);
const paData = Array.from({ length: 24 }, (_, index) =>
  Math.floor(Math.random() * 10000)
);
  const xLabels = Array.from({ length: 24 }, (_, index) => `${index} hr`); // "0 hr" to "23 hr"

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#000",
      },
      text: {
        primary: "#87CEEB",
      },
    },
    typography: {
      caption: {
        fontSize: "0.75rem", // Define font size for caption
      },
    },
  });

  /////////////////////////////////////////////////////////////////
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    // Function to update current date
    const updateDate = () => {
      const date = new Date();
      setCurrentDate(date);
    };

    // Update current date initially
    updateDate();

    // Update current date every second
    const interval = setInterval(updateDate, 10000000000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const getMonthName = (monthIndex) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthIndex];
  };

  // Function to get day suffix
  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1);

  // Calculate the day before yesterday's date
  const dayBeforeYesterday = new Date(currentDate);
  dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

  return (
    <div style={{ padding: "50px" }}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="white"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab
            value="one"
            label="TODAY"
            sx={{
              fontFamily: "EB Garamond",
              fontSize: "16px",
              marginRight: "50px",
            }} // Increased gap between tabs
          />
          <Tab
            value="two"
            label="YESTERDAY"
            sx={{
              fontFamily: "EB Garamond",
              fontSize: "16px",
              marginRight: "50px",
            }} // Increased gap between tabs
          />
        </Tabs>
      </Box>
      {value === "one" && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                flex: 1,
                marginRight: 10,
                textAlign: "center",
                padding: 20,
                fontSize: "20px",
              }}
            >
              {" "}
              {currentDate && (
                <h style={{ color: "#c8ccd5" }}>
                  {getMonthName(currentDate.getMonth())},{" "}
                  {currentDate.getDate()}
                  {getDaySuffix(currentDate.getDate())}{" "}
                  {currentDate.getFullYear()}
                </h>
              )}
              <br></br>
              <br></br>
              <CurrencyRupeeIcon /> 55
            </div>
            <div
              style={{
                flex: 1,
                marginRight: 10,
                textAlign: "center",
                padding: 20,
                fontSize: "20px",
              }}
            >
              <h style={{ color: "#c8ccd5" }}>SO FAR TODAY </h>
              <br></br>
              <br></br>
              <CurrencyRupeeIcon /> 55
            </div>
            <div
              style={{
                flex: 1,
                marginRight: 10,
                textAlign: "center",
                padding: 20,
                fontSize: "20px",
              }}
            >
              <h style={{ color: "#c8ccd5" }}>PREDICTED TODAY</h>
              <br></br>
              <br></br>
              <CurrencyRupeeIcon /> 55
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                padding: 20,
                fontSize: "20px",
              }}
            >
              <h style={{ color: "#c8ccd5" }}>ESTIMATED SAVINGS</h>
              <br></br>
              <br></br>
              <CurrencyRupeeIcon /> 55
            </div>
          </div>
          <ThemeProvider theme={theme}>
            <BarChart
              width={1000}
              height={500}
              series={[
                {
                  data: pData,
                  label: "Electricity",
                  id: "pvId",
                  stack: "total",
                },
                { data: uData, label: "Water", id: "uvId", stack: "total" },
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
          </ThemeProvider>
        </div>
      )}

      {value === "two" && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                flex: 1,
                marginRight: 10,
                textAlign: "center",
                padding: 20,
                fontSize: "20px",
              }}
            >
              {" "}
              {currentDate && (
                <h style={{ color: "#c8ccd5" }}>
                  {getMonthName(dayBeforeYesterday.getMonth())},{" "}
                  {dayBeforeYesterday.getDate()}
                  {getDaySuffix(dayBeforeYesterday.getDate())}{" "}
                  {dayBeforeYesterday.getFullYear()}
                </h>
              )}
              <br></br>
              <br></br>
              <CurrencyRupeeIcon /> 55
            </div>
            <div
              style={{
                flex: 1,
                marginRight: 10,
                textAlign: "center",
                padding: 20,
                fontSize: "20px",
              }}
            >
              {currentDate && (
                <h style={{ color: "#c8ccd5" }}>
                  {getMonthName(yesterday.getMonth())}, {yesterday.getDate()}
                  {getDaySuffix(yesterday.getDate())} {yesterday.getFullYear()}
                </h>
              )}
              <br></br>
              <br></br>
              <CurrencyRupeeIcon /> 55
            </div>
            <div
              style={{
                flex: 1,
                marginRight: 10,
                textAlign: "center",
                padding: 20,
                fontSize: "20px",
              }}
            >
              <h style={{ color: "#c8ccd5" }}>SAVINGS</h>
              <br></br>
              <br></br>
              <CurrencyRupeeIcon /> 55
            </div>
          </div>
          <ThemeProvider theme={theme}>
            <BarChart
              width={1000}
              height={500}
              series={[
                {
                  data: pData,
                  label: ` ${yesterday.getDate()} Electricity`,
                  id: "pvId",
                  stack: "total",
                },
                { data: uData, label: ` ${yesterday.getDate()} Water`, id: "uvId", stack: "total" },
                { data: paData, label: `${dayBeforeYesterday.getDate()} Electricity`, id: "uvIad", stack: "totala"},
                { data: uaData, label: `${dayBeforeYesterday.getDate()} Water`, id: "uvIaad", stack: "totala" },
              
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Cost_days;
