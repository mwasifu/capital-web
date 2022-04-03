import React from "react";
import { Container, Row, Input, Button } from "rsuite";
import "./styles/hero.css";

const Hero = () => {
  return (
    <div>
      <Container>
        <Row className="page">
          <h1>Capital</h1>
          <br />
          <h2 style={{fontWeight: '400'}}>Login</h2>
          <br />
          <div className="login">
            <div className="credentials">
              <Input type="text" placeholder="Username" />
            </div>
            <div className="credentials">
              <Input type="password" placeholder="Password" />
            </div>
            <div style={{textAlign: 'center', margin: "1.5rem"}}>
              <Button color="violet" appearance="primary">Login</Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
