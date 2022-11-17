import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/revv.png";
import projImg3 from "../assets/img/indego.png";

import projImg4 from "../assets/img/expedia.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Myntra Clone",
      description: [
        "Tech Stack Used :",
        "HTML",
        "CSS",
        "JavaScript",
        "BootStrap",
      ],
      imgUrl:
        "https://cdn.dorik.com/625f70b8180b790011866ddb/625f71b5180b790011866ddd/images/Screenshot-(61)_2nfbm0d7.png",
      liveurl: "https://mahesh-jangid.github.io/Myntra-clone-project/",
      git: "https://github.com/mahesh-jangid/Myntra-clone-project",
    },
    {
      title: "Revv Clone",
      description: [
        "Tech Stack Used :",
        "HTML",
        "CSS",
        "JavaScript",
        "BootStrap",
      ],
      imgUrl: projImg2,
      liveurl: "https://revv-clone.netlify.app/index.html",
      git: "https://github.com/satyadav123/revvgroup-frontend",
    },
    {
      title: "Indiegogo Clone",
      description: [
        "Tech Stack Used :",
        "React",
        "Redux",
        "NodeJS",
        "Chakra-ui",
      ],
      imgUrl: projImg3,
      liveurl: "https://63749cfcbfcf1b25a51bea10--indiegogoweb.netlify.app/",
      git: "https://github.com/Surajbnp/Indiegogo-Clone",
    },
    {
      title: "Expedia Clone",
      description: [
        "Tech Stack Used :",
        "JavaScript",
        "React",
        "Redux",
        "Chakra-ui",
      ],
      imgUrl: projImg4,
      liveurl: "https://allseasonhotels.vercel.app/",
      git: "https://github.com/Dhanraj4198/average-collar-3069",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ padding: "20px" }}>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Row>
                        {projects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
