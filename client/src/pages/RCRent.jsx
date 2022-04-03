import React from "react";
import { Button, Col, Row } from "rsuite";
import RCRentTable from "../components/RCRentTable";
import SidebarRC from "../components/SidebarRC";

import "./styles/common.css";
const RCRent = () => {
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
            <h1 className="mode">Rent Collection</h1>
          </div>
          <div>
            <RCRentTable />
          </div>
          <div className="entry">
            <Button color="violet" appearance="primary">Create a new entry</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RCRent;
