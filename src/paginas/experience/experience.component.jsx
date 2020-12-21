import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="bieden">
      <h1 className="pt-3 text-center font-details-b pb-3">Wat ik te bieden heb</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <h2>24/7 KWALITEIT</h2>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Professionele fullstack developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> PHP7, Laravel 5.* - 8, JS, React.JS/Redux 
                    <br />
                    <strong>Actief sinds:</strong> 2013 - 2014
                    <br/>
                    <strong> Waar ik trots op ben </strong>
                    <ul className="text-left">
                      <li><strong>Gemaakt &amp; verbeterd</strong> Advanced Stealth 1.0 (te zien op mijn github)</li>
                      <li><strong>Gemaakt</strong> Geautomatiseerde vulnerability exploits in Python3 voor Hackthebox.eu
                      </li>
                      <li><strong>Gemaakt </strong> CRUD operations op meerdere databases tegelijk :)</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
