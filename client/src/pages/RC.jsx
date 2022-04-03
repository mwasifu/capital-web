import React from "react";
import { Button, Col, Row } from "rsuite";
import RCShopOverviewTable from "../components/RCShopOverviewTable";
import SidebarRC from "../components/SidebarRC";
import "./styles/common.css";

const RC = () => {
  return (
    <div>
      <Row>
        <Col>
          <SidebarRC />
        </Col>
        <Col className="right-col">
          <div className="heading">
            <h1 className="title">RC</h1>
            <br />
            <h1 className="mode">Shop Overview</h1>
          </div>
          <div className="table-container">
            <RCShopOverviewTable />
          </div>
          <div className="entry">
            <Button color="violet" appearance="primary">Create a new entry</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RC;
