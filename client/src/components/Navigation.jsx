import React from "react";
import { Nav, Button, ButtonToolbar } from "rsuite";
import { useNavigate } from "react-router";

const Navigation = ({ active, onSelect, ...props }) => {
  const navigate = useNavigate();
  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{
        textAlign: "center",
        backgroundColor: "#5d7acc",
        margin: "0",
        fontSize: "1.5rem",
        padding: "0.7rem",
        background: "linear-gradient(90deg, rgba(0,0,0,1) 24%, rgba(118,33,50,1) 64%, rgba(252,70,107,1) 100%)"
      }}
    >
      <ButtonToolbar>
        <Nav.Item
          onClick={() => {
            navigate("/");
          }}
        >
          <Button
            color="red"
            appearance="subtle"
            style={{ padding: "0.5rem", fontSize: "1.2rem", color: "white" }}
          >
            Home
          </Button>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            navigate("/hm");
          }}
        >
          <Button
            color="red"
            appearance="subtle"
            style={{ padding: "0.5rem", fontSize: "1.2rem", color: "white" }}
          >
            HM
          </Button>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            navigate("/rc");
          }}
        >
          <Button
            color="red"
            appearance="subtle"
            style={{ padding: "0.5rem", fontSize: "1.2rem", color: "white" }}
          >
            RC
          </Button>
        </Nav.Item>
      </ButtonToolbar>
    </Nav>
  );
};

export default Navigation;
