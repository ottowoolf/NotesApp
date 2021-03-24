import React from "react";
import "./styles/header.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { clearAll } from "../storage";

export const Header = () => {
  return (
    <>
      <Container className='header'>
        <Navbar>
          <Navbar.Brand href='/'>Notes</Navbar.Brand>
          <Nav>
            <LinkContainer to='/'>
              <Nav.Link>Notes</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Button
          className='btn btn-secondary'
          onClick={clearAll}
          onSubmit={window.location.reload}
        >
          Clear All
        </Button>
      </Container>
    </>
  );
};
