import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import "../Footers/Footer.css";

function Footer() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollAmount >= slider.scrollWidth / 2) {
        slider.scrollTo({ left: 0 });
        scrollAmount = 0;
      } else {
        slider.scrollBy({ left: 1 });
        scrollAmount += 1;
      }
    };

    const interval = setInterval(scroll, 10); // Adjust speed by changing interval time
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="footer">
      <Navbar className="footer-navbar2">
        <Container>
          <div className="slider-wrapper" ref={sliderRef}>
            <div className="slider-content">
              <div className="slider-item">
                <FontAwesomeIcon icon={faLocationDot} className="nav2-icon2" />
                Kundrathur, Chennai
              </div>
              <div className="slider-item">
                <FontAwesomeIcon icon={faPhone} className="nav2-icon2" />
                +91 7598300555
              </div>
              <div className="slider-item">
                <FontAwesomeIcon icon={faCopyright} className="nav2-icon2" />
                2035 by Janani Traders . Powered and secured by Elamugilan
              </div>
              <div className="slider-item">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="nav2-icon2" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="nav2-icon2" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faWhatsapp} className="nav2-icon2" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="nav2-icon2" />
                </a>
              </div>
              {/* Duplicate items for infinite scroll effect */}
              <div className="slider-item">
                <FontAwesomeIcon icon={faLocationDot} className="nav2-icon2" />
                Kundrathur, Chennai
              </div>
              <div className="slider-item">
                <FontAwesomeIcon icon={faPhone} className="nav2-icon2" />
                +91 7598300555
              </div>
              <div className="slider-item">
                <FontAwesomeIcon icon={faCopyright} className="nav2-icon2" />
                2035 by Janani Traders . Powered and secured by Elamugilan
              </div>
              <div className="slider-item">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="nav2-icon2" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="nav2-icon2" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faWhatsapp} className="nav2-icon2" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="nav2-icon2" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </section>
  );
}

export default Footer;
