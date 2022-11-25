import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laisser moi <span className="purple"> Me presanter </span> 
            </h1>
            <p className="home-about-body">
              je suis dans la programations depuis l'age de 13 ans 🤷‍♂️
              <br />
              <i>
                <b className="purple"> lua, html, c#, nodejs. </b>
              </i>
              <br />
              <br />
              j'ai développer plusieur scrips sur des jeu sur le mode de jeu du RolePlay du style&nbsp;
              <i>
                <b className="purple">Garry's mod </b> et
                FiveM ou bien Arma3{" "}
              </i>
              <br />
              <br />
              vous pouvez retrouver tout se que j'ai fait dans la catégorie mes projet
              <i>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
