import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gtarp from "../../Assets/Projects/img3.png";
import contextmenu from "../../Assets/Projects/img1.png";
import scoreboard from "../../Assets/Projects/img2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Projet en <strong className="purple">2021 / 2022 </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scoreboard}
              isBlog={false}
              title="Scoreboard"
              description="Le Scoreboard a été fait dans l'unique but de regrouper tout les joueur connectée sur le serveur dans une liste ou que tout le monde peut y avoir accées et que les staff peuvent avoir des actions Administratif!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contextmenu}
              isBlog={false}
              title="Contexte Menu"
              description="le contexte menu a été fait dans l'unique but faciliter les liens des serveur ou bien avoir des commande difficile a utilier que le joueur execute juste en cliquant sur un bouton"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gtarp}
              isBlog={false}
              title="Echap Menu GTA RP"
              description="un menu echap remasterisée pour avoir des short cut pour faciliter l'utilisations des joueur"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
