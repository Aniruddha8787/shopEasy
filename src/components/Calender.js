import React from "react";
import { Col, Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export const Calender = () => {
  return (
    <section style={{marginTop:"15px"}} className="gt">
      <Row className="aligh-items-center">
        <Col xs={18} md={9} xl={12} className="cal">
          <GitHubCalendar
            style={{ margin: "auto" }}
            username="Aniruddha8787"
            blockSize={16}
            fontSize={16}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </Col>
      </Row>
      <Row>
        <Col style={{ width: "40%", margin: "auto" }} xs={18} md={9} xl={12}>
          <img src="https://github-readme-streak-stats.herokuapp.com?user=Aniruddha8787&theme=dark" />
        </Col>
      </Row>
      <Row
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "1%",
          marginBottom: "1%",
        }}
      >
        <Col size={16} sm={7} md={5} className="lan">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aniruddha8787" />
        </Col>
        <Col size={18} sm={9} md={6} className="stek">
          <img src="https://github-readme-stats.vercel.app/api?username=Aniruddha8787&count_private=true&show_icons=true" />
        </Col>
      </Row>
    </section>
  );
};
