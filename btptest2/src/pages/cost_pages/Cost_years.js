import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import { BarChart } from '@mui/x-charts/BarChart';
import { BarChart } from "@mui/x-charts/BarChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Chat.css";
const Cost_years= () => {
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
  const uData = Array.from({ length: 12}, (_, index) =>
    Math.floor(Math.random() * 10000)
  );
  const pData = Array.from({ length: 12 }, (_, index) =>
    Math.floor(Math.random() * 10000)
  );
  const xLabels = [
    'Jan', // January
    'Feb', // February
    'Mar', // March
    'Apr', // April
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec' // December
  ];
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


  // Function to get day suffix

  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1);

  // Calculate the day before yesterday's date
  const dayBeforeYesterday = new Date(currentDate);
  dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);




  
  function getPreviousYears(date) {
    // Create a new Date object based on the provided date
    const currentDate = new Date(date);
  
    // Get the year of the provided date
    const currentYear = currentDate.getFullYear();
  
    // Calculate the previous year
    const previousYearDate = new Date(currentYear - 1, currentDate.getMonth(), 1);
  
    // Calculate the year before the previous year
    const yearBeforePreviousDate = new Date(currentYear - 2, currentDate.getMonth(), 1);
  
    // Return the previous year and the year before the previous year
    return {
      previousYear: previousYearDate.getFullYear(),
      yearBeforePrevious: yearBeforePreviousDate.getFullYear(),
    };
  }
  

const { previousYear, yearBeforePrevious } = getPreviousYears(currentDate);

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
            label="THIS YEAR"
            sx={{
              fontFamily: "EB Garamond",
              fontSize: "16px",
              marginRight: "50px",
            }} // Increased gap between tabs
          />
          <Tab
            value="two"
            label="LAST YEAR"
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
                  {currentDate.getFullYear()}{" "}
           
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
              <h style={{ color: "#c8ccd5" }}>SO FAR THIS YEAR </h>
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
              {yearBeforePrevious}
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
       {previousYear}
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
                  label: ` ${previousYear} Electricity`,
                  id: "pvId",
                  stack: "total",
                },
                { data: uData, label: ` ${previousYear} Water`, id: "uvId", stack: "total" },
                { data: uData, label: `${yearBeforePrevious} Electricity`, id: "uvIad", stack: "totala"},
                { data: uData, label: `${yearBeforePrevious} Water`, id: "uvIaad", stack: "totala" },
              ]}
              
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Cost_years;
