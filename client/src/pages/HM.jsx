import React from "react";
import { Button, Col, Row } from "rsuite";
import SidebarHM from "../components/SidebarHM";
import HMShopOverviewTable from "../components/HMShopOverviewTable";
import "./styles/common.css";
const HM = () => {
  return (
    <div>
      <Row>
        <Col sm={1} md={1} lg={4}>
          <SidebarHM />
        </Col>
        <Col className="right-col" sm={1} md={1} lg={2}>
          <div className="heading">
            <h1 className="title">HM</h1>
            <br />
            <h1 className="mode">Shop Overview</h1>
          </div>
          <div className="table">
            <HMShopOverviewTable />
          </div>
          <div className="entry">
            <Button color="violet" appearance="primary">Create a new entry</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HM;
