import React, { useState, useEffect } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { BarChart } from "@mui/x-charts/BarChart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import moment from "moment";
import Co2Icon from "@mui/icons-material/Co2";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Progress } from "antd";
charts(FusionCharts);
const Dashbord = () => {
  const conicColors = {
    "0%": "#87d068",
    "50%": "#ffe58f",
    "100%": "#ffccc7",
  };

  // today chart
  //var dayDetail = moment().format('MMMM, Do YYYY');
  //var dayLen = 24;
  var timeFlag = moment().format("a");
  var currentHour;
  // eslint-disable-next-line
  if (timeFlag == "pm") {
    // eslint-disable-next-line
    currentHour = parseInt(moment().format("h")) + 12;
  } else {
    currentHour = moment().format("h");
  }

  var categoryArr = [];
  for (var i = 1; i <= 23; i++) {
    // eslint-disable-next-line
    if (i != currentHour) {
      // eslint-disable-next-line
      if (i % 4 != 0) {
        categoryArr.push({ label: i + " hrs", showLabel: "0" });
      } else {
        categoryArr.push({ label: i + " hrs" });
      }
    } else {
      categoryArr.push({ label: currentHour + " hrs" });
      categoryArr.push({
        vline: "true",
        color: "#707C92",
        dashed: "1",
        linePosition: "0",
        labelPosition: "0",
      });
    }
  }

  var dayValueArr = [
    0, 1, 1.3, 1.8, 2.6, 3.1, 3.9, 4.3, 4.8, 5.6, 5.9, 6.2, 7.3, 7.8, 8.3, 8.7,
    9.2, 9.8, 10.6, 11.8, 12.3, 13.9, 14.4, 15.1,
  ];

  var activeArr = [];
  // eslint-disable-next-line
  for (var i = 1; i <= 23; i++) {
    // eslint-disable-next-line
    if (i <= currentHour) {
      // eslint-disable-next-line
      if (i % 4 != 0) {
        activeArr.push({ value: dayValueArr[i - 1], anchorAlpha: "0" });
      } else {
        activeArr.push({ value: dayValueArr[i - 1] });
      }
    } else {
      activeArr.push({ value: null, anchorAlpha: "0" });
    }
  }

  var inActiveArr = [];
  // eslint-disable-next-line
  for (var i = 1; i <= 23; i++) {
    if (i <= currentHour) {
      inActiveArr.push({ value: dayValueArr[i - 1], anchorAlpha: "0" });
    } else {
      // eslint-disable-next-line
      if (i % 4 != 0) {
        inActiveArr.push({ value: dayValueArr[i - 1], anchorAlpha: "0" });
      } else {
        inActiveArr.push({ value: dayValueArr[i - 1] });
      }
    }
  }

  const [dataSource, setDataSource] = useState({
    chart: {
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      showBorder: "0",
      showCanvasBorder: "0",
      showValues: "0",
      showAlternateHGridColor: "0",
      legendBgAlpha: "0",
      usePlotGradientColor: "0",
      paletteColors: "#48DFBA, #F7E332",
      drawCustomLegendIcon: "1",
      baseFontSize: "14",
      baseFontColor: "#FDFDFD",
      showPlotBorder: "0",
      baseFont: "Nunito Sans",
      legendBorderAlpha: "0",
      numberPrefix: "$",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "5",
      toolTipBorderRadius: "2",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      showXAxisLine: "1",
      showYAxisLine: "1",
      xAxisLineColor: "#9092A4",
      yAxisLineColor: "#9092A4",
      xAxisLineThickness: "1.5",
      yAxisLineThickness: "1.5",
      divLineColor: "#414761",
      divLineAlpha: "100",
      divLineThickness: "1.5",
      divLineDashed: "1",
      divLineDashGap: "2",
      divlineDashLen: "3",
      transposeAxis: "1",
      scrollHeight: "8",
      scrollColor: "#FDFDFD",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      chartLeftMargin: "0",
      chartRightMargin: "0",
      canvasLeftMargin: "0",
      pieRadius: "80%",
      canvasRightMargin: "0",
      plottooltext: "<b>$percentValue</b> of total cost are on <b>$label</b>",
      centerlabel: " $label: $value",
      defaultcenterlabel: "Total  ",
      innerRadius: "5%",
    },

    data: [
      {
        label: "Electricity",
        value: "1067550000",
      },
      {
        label: "Water",
        value: "572550000",
      },
    ],
  });
  const uData = [4000, 3000];
  const pData = [2400, 1398];
  const xLabels = ["Page A", "Page B"];

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
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [dataSourcea, setDataSourcea] = useState({
    chart: {
      showBorder: "0",
      showCanvasBorder: "0",
      showAlternateHGridColor: "0",
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      baseFontSize: "13",
      baseFont: "Nunito Sans Light",
      baseFontColor: "#FDFDFD",
      divLineThickness: "2",
      showValues: "0",
      showLegend: "0",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "7",
      toolTipBorderRadius: "3",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      paletteColors: "#FA394E, #4B53FF",
      usePlotGradientColor: "0",
      yAxisMinValue: "0",
      yAxisMaxValue: "10",
      plotFillAlpha: "100",
      drawAnchors: "1",
      anchorBgColor: "#FA394E",
      anchorBorderColor: "#FDFDFD",
      anchorRadius: "5",
      anchorBorderThickness: "1.9",
      showPlotBorder: "0",
      showToolTip: "1",
      canvasTopMargin: "75",
      canvasBottomMargin: "75",
      canvasLeftMargin: "30",
      canvasRightMargin: "30",
      labelDisplay: "ROTATE",
      numberSuffix: " kWh",
      transposeAnimation: "1",
    },

    annotations: {
      groups: [
        {
          items: [
            //     {
            //     "id": "1",
            //     "type": "text",
            //     "text": dayDetail,
            //     "align": "left",
            //     "font": "Nunito Sans",
            //     "bold": "0",
            //     "fontSize": "14",
            //     "color": "#FDFDFD",
            //     "x": "$chartStartX + 15",
            //     "y": "$chartEndY - 18"
            // },
            {
              id: "2",
              type: "text",
              text: "Till Now:",
              align: "left",
              font: "Nunito Sans",
              bold: "0",
              fontSize: "12.5",
              color: "#FDFDFD",
              x: "$canvasStartX - 20",
              y: "$canvasStartY - 35",
            },
            {
              id: "3",
              type: "text",
              text: dayValueArr[currentHour - 1].toString() + " kWh",
              align: "left",
              font: "Nunito Sans",
              bold: "1",
              fontSize: "13",
              color: "#FDFDFD",
              x: "$canvasStartX + 30",
              y: "$canvasStartY - 35",
            },
            {
              id: "4",
              type: "text",
              text: "Predicted:",
              align: "left",
              font: "Nunito Sans",
              bold: "0",
              fontSize: "12.5",
              color: "#FDFDFD",
              x: "$canvasEndX - 116",
              y: "$canvasStartY - 35",
            },
            {
              id: "5",
              type: "text",
              text: dayValueArr[dayValueArr.length - 1].toString() + " kWh",
              align: "left",
              font: "Nunito Sans",
              bold: "1",
              fontSize: "13",
              color: "#FDFDFD",
              x: "$canvasEndX - 60",
              y: "$canvasStartY - 35",
            },
          ],
        },
      ],
    },

    categories: [
      {
        category: categoryArr,
      },
    ],

    dataset: [
      {
        seriesname: null,
        data: activeArr,
      },
      {
        seriesname: null,
        alpha: "20",
        data: inActiveArr,
      },
    ],
  });
  ////////////barchat power consumtion////////////////////////////////////////////////////////////////////////////
  const chartSetting = {
    xAxis: [
      {
        label: "rainfall (mm)",
      },
    ],
    width: 390,
    height: 400,
  };
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: "Jan",
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: "Feb",
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: "Mar",
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: "Apr",
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: "May",
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: "June",
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: "July",
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: "Aug",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: "Sept",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: "oct",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: "nov",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: "dec",
    },
  ];
  const valueFormatter = (value) => `${value}mm`;
  return (
    <div>
      <div className="row mt-3 db-chart">
        <div id="parent1" className="col-lg-6 col-xl-4">
          <div className="chart-card mb-4">
            <div className="chart-title" id="text1">
              COST
            </div>
            <div id="chart1" className="chart">
              <ReactFusioncharts
                type="doughnut2d"
                width="100%"
                height="35%"
                className="fc-column2d"
                id="mychart8"
                dataSource={dataSource}
              />
            </div>
          </div>
        </div>
        <div id="parent2" className="col-lg-6 col-xl-4">
          <div className="chart-card mb-4">
            <div className="chart-title" id="text2">
              CHANGE IN COST
            </div>
            <div id="chart2" className="chart">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1, marginRight: "20px" }}>
                <ThemeProvider theme={theme}>
                  <BarChart
                    width={200}
                    height={405}
                    series={[
                      { data: pData, label: "present", id: "pvId", stack: "total" },
                      { data: uData, label: "previous", id: "uvId", stack: "total" },
                    ]}
                    xAxis={[{ data: xLabels, scaleType: "band" }]}
                  ></BarChart>
                  </ThemeProvider>
                </div>
                <div
                  style={{
                    flex: 1,
                    color: "#00FF00",
                    fontSize: "27px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ display: "flex", marginLeft: -50 }}>
                    <ArrowDropDownIcon style={{ fontSize: "40px" }} />
                    <div style={{ marginLeft: "5px" }}>15%</div>
                  </div>
                  <div style={{ fontSize: "18px" }}>decrease in the cost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="parent3" className="col-lg-6 col-xl-4">
          <div className="chart-card mb-4">
            <div className="chart-title" id="text3">
              USAGE ESTIMATE
            </div>
            <div id="chart3" className="chart">
              <ReactFusioncharts
                type="msarea"
                className="fc-mssplinearea"
                id="mychart3"
                dataFormat="JSON"
                width="100%"
                height="402"
                dataSource={dataSourcea}
              />
            </div>
          </div>
        </div>
        <div id="parent4" className="col-lg-6 col-xl-4">
          <div className="chart-card mb-4">
            <div className="chart-title" id="text4">
              ACTIVE APPLIANCES
            </div>
            <div id="chart4" className="chart">
            <ThemeProvider theme={theme}>
            <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: "band", dataKey: "month" }]}
                series={[
                  { dataKey: "seoul", label: "Seoul rainfall", valueFormatter },
                ]}
                layout="horizontal"
                {...chartSetting}
              >
                {" "}
              </BarChart>
                  </ThemeProvider>
        
            </div>
          </div>
        </div>
        <div id="parent5" className="col-lg-6 col-xl-4">
          <div className="chart-card mb-4">
            <div className="chart-title" id="text5">
              ENERGY INTENSITY
            </div>
            <div id="chart5" className="chart">
              <div
                style={{
                  flex: 1,
                  color: "#00FF00",
                  height: "395px",
                  fontSize: "27px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Progress
                  type="dashboard"
                  size={330}
                  percent={93}
                  strokeColor={conicColors}
                />
                kWh/Sqft
              </div>
            </div>
          </div>
        </div>
        <div id="parent6" className="col-lg-6 col-xl-4">
          <div className="chart-card mb-4" style={{height:440}}>
            <div className="chart-title" id="text6">
              CARBON FOOTPRINT
            </div>
            <div id="chart6" className="chart">
              <h4>Emission</h4>
              <br></br>
              <strong style={{ float: "left" }}>Till now</strong>
              <strong style={{ float: "right" }}>predicted</strong>{" "}
              <Progress percent={50} status="active" />
              <br></br>
              <strong style={{ float: "left" }}>
                36 kg of <Co2Icon />
              </strong>
              <strong style={{ float: "right" }}>
                115 kg of <Co2Icon />
              </strong>{" "}
              <br></br>
            </div>
            <br></br><br></br>
            <div id="chart7" className="chart">
              <br></br>
              <h4>Green Energy Generated</h4>
              <br></br>
              <strong style={{ float: "right" }}>Goal</strong>{" "}
              <Progress percent={50} status="active" />
              <br></br>
              <strong style={{ float: "left" }}>
                21.02 kWh
              </strong>
              <strong style={{ float: "right" }}>
              215.02 kWh
              </strong>{" "}
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
