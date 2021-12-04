import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from 'emailjs-com';
import React, { Fragment, useRef } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_msddx5s', 'template_3ubic8d', e.target, 'user_wEiJx686BZ96PI9I4H5bm')
            .then((result) => {
                formRef.current.reset();
                alert('Your message is send successfully');
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
      <Fragment>
        <Container fluid={true} className="bg-light">
          <Container style={{ marginTop: '100px' }}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <h1 className="contact-title mb-4">Contact with me</h1>
                <p className="contact-info">
                  <FontAwesomeIcon className="footer-icon" icon={faHome} />{' '}
                  Moulvi Bazar, Sylhet, Bangladesh.
                </p>
                <p className="contact-info">
                  {' '}
                  <FontAwesomeIcon
                    className="footer-icon"
                    icon={faEnvelope}
                  />{' '}
                  contact.aliakbortitu@gmail.com
                </p>
                <p className="contact-info">
                  {' '}
                  <FontAwesomeIcon
                    className="footer-icon"
                    icon={faPhoneAlt}
                  />{' '}
                  +8801704999062
                </p>
                <a
                  href="https://www.linkedin.com/in/iffarur-rahat-b66483200/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="contact-info">
                    {' '}
                    <FontAwesomeIcon
                      className="footer-icon"
                      icon={faLinkedin}
                    />{' '}
                    Linkedin
                  </p>
                </a>
                <a
                  href="https://github.com/iffarurrahat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="contact-info">
                    {' '}
                    <FontAwesomeIcon
                      className="footer-icon"
                      icon={faGithub}
                    />{' '}
                    Github
                  </p>
                </a>
                {/* <a href="https://www.youtube.com/" target='_blank' rel="noreferrer"><p className="contact-info" > <FontAwesomeIcon className="footer-icon" icon={faYoutube} /> Youtube</p></a> */}
              </Col>

              <Col lg={6} md={6} sm={12}>
                <h1 className="contact-title mb-4">Get in touch</h1>
                <Form onSubmit={sendEmail} ref={formRef}>
                  <Form.Group>
                    <Form.Label className="textDes">Name</Form.Label>
                    <Form.Control type="text" name="user_name" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="textDes">Email Address</Form.Label>
                    <Form.Control type="email" name="user_email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="textDes">Message</Form.Label>
                    <Form.Control as="textarea" rows="3" name="message" />
                  </Form.Group>

                  <Button
                    className="send-btn"
                    variant="primary btn-block"
                    type="submit"
                  >
                    Send Now
                  </Button>
                </Form>
              </Col>
            </Row>
            <p
              className="copy-write"
              style={{ marginTop: '80px', paddingBottom: '30px' }}
            >
              Copyright © 2021 Ali Akbor All Rights Reserved.
            </p>
          </Container>
        </Container>
      </Fragment>
    );
};

export default Contact;