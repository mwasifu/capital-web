import React from "react";
import { Sidenav, Nav, Dropdown, Toggle } from "rsuite";
import { Dashboard } from "@rsuite/icons";
import LineChartIcon from "@rsuite/icons/LineChart";
import ScatterIcon from "@rsuite/icons/Scatter";
import NumbersIcon from "@rsuite/icons/Numbers";
import {useNavigate} from 'react-router';
import './styles/sidebar.css';

const SidebarHM = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <div style={{ width: 240}}>
      <Sidenav
        appearance="inverse"
        activeKey={activeKey}
        onSelect={setActiveKey}
      >
        <Sidenav.Body className="sidebar-body" style={{height: "100vh", position: "relative", bottom: "2px"}}>
          <Nav className="nav-collection">
            <Nav.Item eventKey="1" icon={<Dashboard />} onClick={() => {
              navigate("/hm")
            }}>
              Shop Overview
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<LineChartIcon />} onClick={() => {
              navigate("/hmrent")
            }}>
              Rent Collection
            </Nav.Item>
            <Dropdown
              placement="rightStart"
              eventKey="3"
              title="More"
              icon={<ScatterIcon />}
            >
              <Dropdown.Item onClick={() => {
              navigate("/report")
            }}eventKey="3-1" >Generate a Report</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SidebarHM;
