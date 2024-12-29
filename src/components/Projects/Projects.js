import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import monitor from "../../Assets/Projects/monitor.jpeg";

import web3 from "../../Assets/Projects/web3.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              isBlog={false}
              title="Certify Web 3.0"
              description="Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                            Certified Web 3.0 and Metaverse Developer"
              ghLink="https://github.com/downtothewire1319/figma_design"
              demoLink="https://metaversewebthree.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monitor}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Start Monitoring your website like a pro"
              ghLink="https://github.com/downtothewire1319/Figmatonextjs"
              demoLink="https://figmatonextjs.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
