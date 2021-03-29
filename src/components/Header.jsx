import React from "react";
import "./styles/header.css";
import { Navbar, Container, Button } from "react-bootstrap";
import { clearAll } from "../storage";

export const Header = () => {
  return (
    <>
      <Container className='header'>
        <Navbar>
          <Navbar.Brand href='/'>Notes</Navbar.Brand>
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
