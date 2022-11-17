import meter1 from "../assets/img/react.gif";
import meter2 from "../assets/img/js.gif";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ marginTop: "90px" }}>
            <div className="skill-bx wow zoomIn">
              <h2 style={{padding:"20px"}}>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <iframe src="https://embed.lottiefiles.com/animation/296"></iframe>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <iframe src="https://embed.lottiefiles.com/animation/73748"></iframe>
                  <h5>JavaScrpit</h5>
                </div>
                <div className="item">
                  <iframe src="https://embed.lottiefiles.com/animation/72902"></iframe>
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <iframe src="https://embed.lottiefiles.com/animation/63204"></iframe>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <iframe src="https://embed.lottiefiles.com/animation/63207"></iframe>
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <iframe src="https://embed.lottiefiles.com/animation/63210"></iframe>
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <iframe src="https://embed.lottiefiles.com/animation/85268"></iframe>
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
