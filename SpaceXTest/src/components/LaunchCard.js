import React from "react";
import Card from "react-bootstrap/Card";
import SpaceXImage from "../assets/spaceX.jpg";

const LaunchCard = ({ launch }) => {
  const cardStyle = {
    height: "100%", // Set a fixed height for all cards
  };

  const imageStyle = {
    maxHeight: "300px",
    objectFit: "cover",
  };

  return (
    <Card style={cardStyle}>
      <Card.Img
        variant="top"
        src={launch.links.patch.small || SpaceXImage}
        alt={launch.name}
        style={imageStyle}
      />
      <Card.Body>
        <div className="d-flex justify-content-center align-items-center flex-column text-center">
          <Card.Title className="text-primary">{launch.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {launch.rocket.name}
          </Card.Subtitle>
          <Card.Text>{launch.details}</Card.Text>
        </div>

        <hr />
        <div className="row">
          <div className="col">
            <Card.Text>
              <strong>Success:</strong> {launch.success ? "Yes" : "No"}
            </Card.Text>
          </div>
          <div className="col"></div>
        </div>
        <Card.Text className="my-3">
          <strong>Article:</strong>{" "}
          <a
            href={launch.links.article}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LaunchCard;
