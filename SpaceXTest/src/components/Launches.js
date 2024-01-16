import React, { useEffect, useState } from "react";
import { getLaunchesByRocketId } from "../services/SpaceXService";
import { useParams } from "react-router-dom";
import LaunchCard from "./LaunchCard";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Launches() {
  const { rocketId, rocketName } = useParams();

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLaunchesByRocketId(rocketId);
        setLaunches(data);
      } catch (error) {
        console.error("Error fetching Launches:", error);
      }
    };

    fetchData();
  }, [rocketId]);

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
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center align-items-center flex-column App">
        <h1 className="my-4 py-4 text-primary">{rocketName} Launches</h1>

        {launches && launches.length > 0 ? (
          <Container className="d-flex justify-content-center align-items-center">
            <Row>
              {launches.map((launch, index) => (
                <Col key={launch.id} md={6} lg={6} xl={6} className="mb-3">
                  <LaunchCard launch={launch} />
                  {index % 2 !== 0 && <div className="w-100"></div>}
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <p>No launches available for {rocketName}.</p>
        )}
      </Container>
    </>
  );
}

export default Launches;
