import React from "react";
import "./styles/home.css";
import { Row } from "../components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = ({ notes, setNotes }) => {
  return (
    <React.Fragment>
      <Container>
        <Row notes={notes} />
      </Container>
      <Container className='btn-home'>
        <Link to='/add' className='btn btn-secondary home-btn m-3 '>
          +
        </Link>
      </Container>
    </React.Fragment>
  );
};
