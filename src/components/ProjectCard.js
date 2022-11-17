import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,liveurl,git }) => {
  return (
    <Col size={18} sm={9} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <div className="des">
            <h4>{title}</h4>
            <h5>{description[0]}</h5>
            <ul>
              <li>{description[1]}</li>
              <li>{description[2]}</li>
              <li>{description[3]}</li>
              <li>{description[4]}</li>
            </ul>
            <Button
              variant="primary"
              className="lv"
              href={liveurl}
              target="_blank"
            >
              Live
            </Button>{" "}
            <Button
              variant="secondary"
              className="git"
              href={git}
              target="_blank"
            >
              Github
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
}
