import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const ReadingRequests = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#notifications">Notifications</Nav.Link>
              <Nav.Link href="#features">Calendar </Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ReadingRequests;
