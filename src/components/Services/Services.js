import { faArrowRight, faCode, faDatabase, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './Service.css';

const serviceData = [
  {
    icon: faPencilRuler,
    title: 'Web design',
    des: 'The different areas of web design include web graphic design; user interface design; authoring, including standardised code ',
  },
  {
    icon: faCode,
    title: 'Web Development',
    des: 'Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development.',
  },
  {
    icon: faCode,
    title: 'Back End Development',
    des: 'Web development as an example — ... required of a front-end vs. a back-end software developer. The list below focuses on web development as an example.',
  },
  {
    icon: faDatabase,
    title: 'Front-end Development',
    des: 'A front-end developer brings the design and functionality of an app to life, blending a mix of UI, UX, graphic design, and plenty of technical coding skills.',
  },
  {
    icon: faDatabase,
    title: 'API Development',
    des: 'The Modern API · Modern APIs adhere to standards (typically HTTP and REST), that are developer-friendly, easily accessible and understood broadly ',
  },
  //   {
  //     icon: faPencilRuler,
  //     title: 'Problem Solving',
  //     des: 'ualified web design and attractive effects which catches visitor’s Eye.',
  //   },
];

const Services = () => {
  return (
    <>
      <Container fluid={true} className="bg-light p-5">
        <Container className="text-center">
          <h6 className="title">Services</h6>
          {/* <h3 className="mb-4">What We Do...</h3> */}
          <Row>
            {serviceData.map(data => (
              <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                  <FontAwesomeIcon className="service-icon" icon={data.icon} />
                  <h2 className="serviceName">{data.title}</h2>
                  <p className="service-des">{data.des}</p>
                  <h6 className="read-more">
                    More Details {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                  </h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Services;