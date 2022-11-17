import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} >
            <img src={logo} alt="Logo" style={{padding:"15px"}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>aniruddha87@live.com</p>
            <p>+91-7350727257</p>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anirudh87/" target="_blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Aniruddha8787" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
