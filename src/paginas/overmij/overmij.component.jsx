import React from 'react';
import Image from 'react-bootstrap/Image';
import { Alert, AlertTitle } from '@material-ui/lab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProfielFoto from '../../assets/img/profile/profile.jpg';
import './overmij.style.css'

const OverMij = () => {
    return (
        <div id='overmij'>
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">Over mij</h1>
            <Container>
                
                <Row className="pt-3 pb-5 align-items-center">
                    
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image className="profile justify-content-end" alt="profile" src={ProfielFoto} thumbnail fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                    <Alert variant="filled" severity="info">
                   <AlertTitle>Heyy! ja, jij daar!</AlertTitle>
                   Wist jij dat deze site volledig is gemaakt in<strong> HTML5/CSS3/ReactJS/Bootstrap & Material-UI</strong>
                   </Alert>
                    <br />
                    <br />
                        <Row className="hoi">
                        Hey! Ik ben <strong>&nbsp; Emirhan Sarikaya</strong>
                        <br />Ik ben een full-stack developer en heb interesse in cybersecurity, ik ben 19 jaar oud. En ik ben geboren en getogen in rotterdam.
                        <br />
                       
                        <br />
                        Ik ben een full-stack developer met React.js, Redux, Express.js, Node.js, VanillaJS, jQuery & kan werken met PostgreSQL & MongoDB
                        <br />
                        Wat betreft cybersecurity houd ik me graag bezig met webapplicatie pentesting & low level exploitation & een beetje binexp.
                        <br /> <br />

                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary"><i class="fas fa-envelope-square"></i> Contacteer mij</Button>
                                    </a>
                                </div>
                                <div>
                    <a href="https://www.hackthebox.eu/home/users/profile/394035" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success"><i class="fas fa-box"></i> Hackthebox</Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/EmirhanSarikaya" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i> Github</Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info"><i class="fab fa-linkedin-in"></i> Linkedin</Button>
                    </a>
                  </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
        </div>
    )
}


export default OverMij;