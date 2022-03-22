import React from "react";
import { Sidenav, Nav, Dropdown, Toggle } from "rsuite";
import { Dashboard } from "@rsuite/icons";
import LineChartIcon from "@rsuite/icons/LineChart";
import ScatterIcon from "@rsuite/icons/Scatter";
import NumbersIcon from "@rsuite/icons/Numbers";
const Sidebar = () => {
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <div style={{ width: 240 }}>
      <Sidenav
        appearance="subtle"
        defaultOpenKeys={["3", "4"]}
        activeKey={activeKey}
        onSelect={setActiveKey}
      >
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Dashboard />}>
              Shop Overview
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<LineChartIcon />}>
              Rent Collection
            </Nav.Item>
            <Dropdown
              placement="rightStart"
              eventKey="3"
              title="More"
              icon={<ScatterIcon />}
            >
              <Dropdown.Item eventKey="3-1">Print</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
