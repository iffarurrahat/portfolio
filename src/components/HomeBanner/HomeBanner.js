import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import Typical from 'react-typical';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
      <>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <div className="ml-3">
                    <h3 className="hello-title">Hello Everyone ?</h3>
                    <h1 className="name-title">I am Iffarur Rahat</h1>
                    <Typical
                      className="skill-title"
                      steps={[
                        'Back-end Developer',
                        3000,
                        'Front-end Developer',
                        3000,
                      ]}
                      loop={Infinity}
                      wrapper="p"
                    />
                    <Button variant="primary" className="ml-3">
                      More Details
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
};

export default HomeBanner;