import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import { BarChart } from '@mui/x-charts/BarChart';
import { BarChart } from "@mui/x-charts/BarChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Select } from "antd";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const App_day = () => {
  const [geslable, setlable] = useState(0);
  const handleChangea = (value) => {
    console.log(`selected ${value}`);
    setlable(value);
  };

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

  const top100Films = [
    { label: "Light" },
    { label: "Fan" },
    { label: "Air Conditioner" },
    { label: "Washing Machine" },
    { label: "Television" },
    { label: "Power Sockets" },
    { label: "Computer" },
  ];
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
              <Select
                defaultValue="FAN"
                style={{
                  width: 170,
                  marginLeft: "10px",
                }}
                onChange={handleChangea}
                options={[
                  {
                    value: "0",
                    label: "FAN",
                  },
                  {
                    value: "1",
                    label: "Air Conditioner",
                  },
                  {
                    value: "2",
                    label: "Washing Machine",
                  },
                  {
                    value: "3",
                    label: "Television",
                  },
                  {
                    value: "4",
                    label: "Power Sockets",
                  },
                  {
                    value: "5",
                    label: "Computer",
                  },
                ]}
                sx={{
                  backgroundColor: "transparent",
                  "& .MuiSelect-select": {
                    color: "white",
                    "&:focus": {
                      backgroundColor: "transparent",
                    },
                  },
                  "& .MuiSelect-icon": {
                    fill: "white",
                  },
                }}
              />
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
              <center>
                <h1>4.8 kWh</h1>
                <br></br>
                Electricity2.88 kWh
              </center>
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
            <Select
              defaultValue="FAN"
              style={{
                width: 170,
                marginLeft: "10px",
              }}
              onChange={handleChangea}
              options={[
                {
                  value: "0",
                  label: "FAN",
                },
                {
                  value: "1",
                  label: "Air Conditioner",
                },
                {
                  value: "2",
                  label: "Washing Machine",
                },
                {
                  value: "3",
                  label: "Television",
                },
                {
                  value: "4",
                  label: "Power Sockets",
                },
                {
                  value: "5",
                  label: "Computer",
                },
              ]}
              sx={{
                backgroundColor: "transparent",
                "& .MuiSelect-select": {
                  color: "white",
                  "&:focus": {
                    backgroundColor: "transparent",
                  },
                },
                "& .MuiSelect-icon": {
                  fill: "white",
                },
              }}
            />
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
            <center>
              <h1>4.8 kWh</h1>
              <br></br>
              Electricity2.88 kWh
            </center>
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
      
                {
                  data: paData,
                  label: `${dayBeforeYesterday.getDate()} Electricity`,
                  id: "uvIad",
                  stack: "totala",
                },
        
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default App_day;
