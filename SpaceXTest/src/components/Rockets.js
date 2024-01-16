import React, { useState, useEffect } from "react";
import { getRockets, getSortedRockets } from "../services/SpaceXService";
import RocketCard from "./RocketCard";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const RocketsComponent = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getRockets();
      setRockets(data);
    } catch (error) {
      console.error("Error fetching rockets:", error);
    }
  };

  const handleAscendingClick = async () => {
    try {
      const data = await getSortedRockets("asc");
      setRockets(data);
    } catch (error) {
      console.error("Error fetching rockets:", error);
    }
  };

  const handleDescendingClick = async () => {
    try {
      const data = await getSortedRockets("desc");
      setRockets(data);
    } catch (error) {
      console.error("Error fetching rockets:", error);
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontSize: "2rem" }}
            className="font-weight-bold"
          >
            SpaceX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Sort" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleAscendingClick}>
                  Ascending
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleDescendingClick}>
                  Descending
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="d-flex justify-content-center align-items-center flex-column App">
        <h1 className="my-4 py-4 text-primary">SpaceX Rockets</h1>
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            {rockets?.map((rocket, index) => (
              <Col key={rocket.id} md={6} lg={6} xl={6} className="mb-3">
                <RocketCard rocket={rocket} />
                {index % 2 !== 0 && <div className="w-100"></div>}
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default RocketsComponent;
