import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutImg from '../../images/Ali_Akbor(1).png';
import './About.css';

const About = () => {
  return (
    <>
      <Container fluid={true} className="p-5">
        <Container>
          <h3 className="text-center">About Myself</h3>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="mt-5 ml-5">
                <img className="w-100 about-img" src={aboutImg} alt="" />
                {/* <div className="custom-border"> </div> */}
                {/* <div className="experience">
                    <h6 className="text-center">
                      01 <br /> Year of Experience
                    </h6>
                    <a
                      href="https://www.facebook.com/rkrashu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        className="socialLink"
                        icon={faFacebookF}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rashidul-karim/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        className="socialLink"
                        icon={faLinkedinIn}
                      />
                    </a>
                    <a
                      href="https://github.com/RashidulKarim"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon className="socialLink" icon={faGithub} />
                    </a>
                  </div> */}
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className="mt-5">
                {/* <Button variant="primary btn-sm">About Me</Button> */}
                {/* <Button variant="outline-primary btn-sm" className="ml-3">
                    Education
                  </Button>
                  <Button variant="outline-primary btn-sm" className="ml-3">
                    Skills
                  </Button>
                  <Button variant="outline-primary btn-sm" className="ml-3">
                    Experience
                  </Button> */}
              </div>
              <h3 className="mt-5 mb-4">Hi, I am Junior Web Developer</h3>

              <p className="text-des mb-5">
                I am a Front End developer with industry experience building
                Local websites. I’m currently learning React, Node, Express and
                Others Options. I’m looking for an internship to upgrade my
                skills.
              </p>
              <a
                href="https://drive.google.com/file/d/1hvuR_hKidScGG7Qr123SX-wOz4FI61gy/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">Get My Resume</Button>
              </a>
              {/* <Link to="/contact">
                <Button variant="outline-primary" className="ml-3">
                  Contact Me
                </Button>
              </Link> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default About;