import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigatie = () => {
    return (
        <>
 <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home">Emirhan Sarikaya</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#overmij">Over mij</Nav.Link>
      <Nav.Link href="#skills">Mijn Skillset</Nav.Link>
      <Nav.Link href="#bieden">Te bieden</Nav.Link>
      <Nav.Link href="#projects">Projecten</Nav.Link>
      <Nav.Link href="#contact">Contact mij</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Navigatie;