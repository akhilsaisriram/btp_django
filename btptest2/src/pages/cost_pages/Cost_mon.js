import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import { BarChart } from '@mui/x-charts/BarChart';
import { BarChart } from "@mui/x-charts/BarChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Chat.css";
const Cost_mon= () => {
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
  const uData = Array.from({ length: 30}, (_, index) =>
    Math.floor(Math.random() * 10000)
  );
  const pData = Array.from({ length: 30 }, (_, index) =>
    Math.floor(Math.random() * 10000)
  );
  const xLabels = Array.from({ length: 30 }, (_, index) => `${index} day`); // "0 hr" to "23 hr"

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




  
function getPreviousMonths(date) {
  // Create a new Date object based on the provided date
  const currentDate = new Date(date);

  // Get the month and year of the provided date
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Calculate the previous month
  const previousMonthDate = new Date(currentYear, currentMonth - 1, 1);

  // If the current month is January, decrement the year
  if (currentMonth === 0) {
    previousMonthDate.setFullYear(currentYear - 1);
  }

  // Calculate the month before the previous month
  const monthBeforePreviousDate = new Date(currentYear, currentMonth - 2, 1);

  // If the previous month is January, decrement the year
  if (previousMonthDate.getMonth() === 0) {
    monthBeforePreviousDate.setFullYear(currentYear - 1);
  }

  // Return the previous month and the month before the previous month
  return {
    previousMonth: previousMonthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    monthBeforePrevious: monthBeforePreviousDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
  };
}

const { previousMonth, monthBeforePrevious } = getPreviousMonths(currentDate);

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
            label="THIS MONTH"
            sx={{
              fontFamily: "EB Garamond",
              fontSize: "16px",
              marginRight: "50px",
            }} // Increased gap between tabs
          />
          <Tab
            value="two"
            label="LAST MONTH"
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
                  {getMonthName(currentDate.getMonth())}{" "}
           
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
              <h style={{ color: "#c8ccd5" }}>SO FAR THIS MONTH </h>
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
              <h style={{ color: "#c8ccd5" }}>PREDICTED  </h>
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
              {monthBeforePrevious}
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
       {previousMonth}
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
                  label: ` ${previousMonth} Electricity`,
                  id: "pvId",
                  stack: "total",
                },
                { data: uData, label: ` ${previousMonth} Water`, id: "uvId", stack: "total" },
                { data: uData, label: `${monthBeforePrevious} Electricity`, id: "uvIad", stack: "totala"},
                { data: uData, label: `${monthBeforePrevious} Water`, id: "uvIaad", stack: "totala" },
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Cost_mon;
