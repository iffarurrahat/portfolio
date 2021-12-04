import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import project5 from '../../images/project/carMechanic.png';
import project1 from '../../images/project/bollet-bikes.png';
import project6 from '../../images/project/doctors.png';
import project2 from '../../images/project/emaJohn.png';
import project4 from '../../images/project/bnsf.png';
import project3 from '../../images/project/tourX.png';
import './Projects.css';

const portfolioData = [
  {
    image: project1,
    url: 'https://bolet-bike.firebaseapp.com/',
  },
  {
    image: project2,
    url: 'https://ema-john-react-route-module-54.netlify.app/',
  },
  {
    image: project3,
    url: 'https://tourx-travels.web.app/',
  },
  {
    image: project4,
    url: 'https://bnsb-eye-hospital.web.app/',
  },
  {
    image: project5,
    url: 'https://genius-car-mechanic-8511c.web.app/',
  },
  //   {
  //     image: project6,
  //     url: 'https://top-doctors.netlify.app/',
  //   },
];

const Projects = () => {
  return (
    <>
      <Container className="text-center mt-5">
        <h6 className="title" style={{ color: '#000' }}>
          My Recent Work
        </h6>
        <h3 className="mb-4">My Projects</h3>
        <Row>
          {portfolioData.map(data => (
            <Col lg={4} md={6} sm={12}>
              <div className="portfolioCard">
                <img className="projectImage" src={data.image} alt="" />
                <div className="middle">
                  <a href={data.url} target="_blank" rel="noreferrer">
                    <div className="text">Live Website</div>
                  </a>{' '}
                  {/* <br /> */}
                  {/* <Button variant="light">Details</Button> */}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Projects;