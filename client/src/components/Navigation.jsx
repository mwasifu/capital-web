import React from "react";
import { Nav } from "rsuite";

const Navigation = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} style={{textAlign: 'center', backgroundColor: 'white', margin: "0", fontSize: "1rem"}}>
      <Nav.Item eventKey="home">Home</Nav.Item>
      <Nav.Item eventKey="news">HM</Nav.Item>
      <Nav.Item eventKey="solutions">RC</Nav.Item>
    </Nav>
  );
};

export default Navigation;
