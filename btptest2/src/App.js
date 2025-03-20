import React, { useState, useEffect } from "react";
import "./App.css";
import "./bord.css";
import Nav from "react-bootstrap/Nav";
import Dashbord from "./pages/Dashbord";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import Co2Icon from '@mui/icons-material/Co2';
import Costdash from './pages/Costdash';
import Appliences from "./pages/Appliences";
import Usage_room from "./pages/Usage_room";
function App() {
  const [date, setda] = useState("2");
  const handleSelect = (eventKey) => setda(eventKey);
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
    const interval = setInterval(updateDate, 100000);

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
  const [key, setKey] = useState("first");
  console.log(key);
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          {/* <!-- sidebar --> */}
          <div id="nav" className="col-12 col-md-3 col-xl-2 bd-sidebar">
            <div className="row">
              <div className="col-md-12 col-8">
                <div className="text-sm-left text-md-center logo">
                  <span id="beta"> G A I A </span>SMART
                </div>
              </div>
              <div className="col-12" style={{ width: '100%', height: '120px' }}></div>

              <div className="col-md-10  text-right">
                {/* <!-- for menu when screen width is less--> */}
                <Tab.Container
                  id="left-tabs-example"
                  defaultActiveKey="first"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                >
                  <Col sm={20}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item style={{ fontSize: '16px' }}>
                        <Nav.Link eventKey="first" ><DashboardIcon></DashboardIcon> Dashboard</Nav.Link>
                      <br></br>
                        <Nav.Link eventKey="second"><CurrencyRupeeIcon/> Cost</Nav.Link>
                        <br></br>
                        <Nav.Link eventKey="app"><TipsAndUpdatesIcon/> Appliances</Nav.Link>
                        <br></br>
                        <Nav.Link eventKey="usage"><PivotTableChartIcon/> Usage-by-rooms</Nav.Link>
                        <br></br>
                        {/* <Nav.Link eventKey="emistion"><Co2Icon/> Emissions</Nav.Link> */}
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Tab.Container>
              </div>
            </div>

            <nav className="collapse bd-links" id="bd-docs-nav"></nav>
          </div>

          {/* <!-- sidebar end --> */}
          <div
            id="content-body"
            className="col-12 col-md-9 col-xl-10 pl-4 pr-4 bd-content"
          >
            {/* <!-- heading row --> */}
            <div className="row">
              <div className="col-md-12 pt-4 mt-3">
                <h2>Energy Dashboard</h2>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-9">
                <ul className="buttonwrapper">
                  <Nav
                    variant="pills"
                    defaultActiveKey="2"
                    style={{ color: "red" }}
                    onSelect={handleSelect}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="1">TODAY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">MONTH </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">YEAR</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </ul>
              </div>
              <div
                className="col-md-3 text-right date-indicator"
                style={{ marginLeft: 0 }}
              >
                {" "}
                {currentDate && (
                  <div>
                    <p>
                      {date === "1" || date === "2" ? (
                        <>{getMonthName(currentDate.getMonth())}, </>
                      ) : (
                        <></>
                      )}
                      {date === "1" ? (
                        <>
                          {currentDate.getDate()}
                          {getDaySuffix(currentDate.getDate())}{" "}
                        </>
                      ) : (
                        <></>
                      )}
                      {currentDate.getFullYear()}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {key === "first" ? (
              <>
                <Dashbord />
              </>
            ) : (
              <></>
            )}
               {key === "second" ? (
              <>
              <Costdash date={date} />
              </>
            ) : (
              <></>
            )}
                      {key === "app" ? (
              <>
              <Appliences date={date} />
              </>
            ) : (
              <></>
            )}
              {key === "usage" ? (
              <>
              <Usage_room date={date} />
              </>
            ) : (
              <></>
            )}

            {/* <!-- chart row end -->
    <!-- energy tip start --> */}
            <div className="row">
              <div className="col-md-12 pb-3">
                <span className="footer-text-1">Energy Tip: </span>
                <span className="footer-text-2">
                  On warm days, setting a programmable thermostat to a higher
                  setting when you are not at home can help reduce your energy
                  costs by approximately 10 percent.
                </span>
              </div>
            </div>

            {/* <!-- energy tip end --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
