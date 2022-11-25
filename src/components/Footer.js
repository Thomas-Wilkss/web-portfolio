import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Remaked by 𝐌𝐚𝐭𝐨𝐮#5199 but maked by soumyajit4419</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} 𝐌𝐚𝐭𝐨𝐮#5199</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
