import React from "react";
import { Button, Col, Row } from "rsuite";
import SidebarHM from "../components/SidebarHM";
import HMRentTable from "../components/HMRentTable";
import "./styles/common.css";
const HMRent = () => {
  return (
    <div>
      <Row>
        <Col>
          <SidebarHM />
        </Col>
        <Col className="right-col">
          <div className="heading">
            <h1 className="title">HM</h1>
            <br />
            <h1 className="mode">Rent Collection</h1>
          </div>
          <div>
            <HMRentTable />
          </div>
          <div className="entry">
            <Button color="violet" appearance="primary">Create a new entry</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HMRent;
