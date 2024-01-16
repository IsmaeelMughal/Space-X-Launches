import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) {
    return description;
  } else {
    return description.substring(0, maxLength) + "...";
  }
};

const RocketCard = ({ rocket }) => {
  const navigate = useNavigate();
  const cardStyle = {
    height: "100%", // Set a fixed height for all cards
  };

  const imageStyle = {
    maxHeight: "300px",
    objectFit: "cover",
  };

  const handleShowLaunches = () => {
    navigate(`/launches/${rocket.id}/${rocket.name}`);
  };

  return (
    <Card style={cardStyle}>
      <Card.Img
        variant="top"
        src={rocket.flickr_images[0]}
        alt={rocket.name}
        style={imageStyle}
      />
      <Card.Body>
        <div className="d-flex justify-content-center align-items-center flex-column text-center">
          <Card.Title className="text-primary">{rocket.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {rocket.type}
          </Card.Subtitle>
          <Card.Text>{truncateDescription(rocket.description, 100)}</Card.Text>
        </div>

        <hr />
        <div className="row">
          <div className="col">
            <Card.Text>
              <strong>Country:</strong> {rocket.country}
            </Card.Text>
            <Card.Text>
              <strong>Company:</strong> {rocket.company}
            </Card.Text>
            <Card.Text>
              <strong>First Flight:</strong> {rocket.first_flight}
            </Card.Text>
          </div>
          <div className="col">
            <Card.Text>
              <strong>Active:</strong> {rocket.active ? "Yes" : "No"}
            </Card.Text>
            <Card.Text>
              <strong>Success Rate:</strong> {rocket.success_rate_pct}%
            </Card.Text>
            <Card.Text>
              <strong>Cost per Launch:</strong> ${rocket.cost_per_launch}
            </Card.Text>
          </div>
        </div>
        <Card.Text className="my-3">
          <strong>Wikipedia:</strong>{" "}
          <a href={rocket.wikipedia} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </Card.Text>
        <Button variant="primary" onClick={handleShowLaunches}>
          Show Launches
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RocketCard;
