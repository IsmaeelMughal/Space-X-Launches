import React, { useState, useEffect } from "react";
import { getLaunches, getRockets } from "../services/SpaceXService";

const SpaceXComponent = () => {
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch launches
        const launchesData = await getLaunches();
        setLaunches(launchesData);

        // Fetch rockets
        const rocketsData = await getRockets();
        setRockets(rocketsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>{launch.name}</li>
        ))}
      </ul>

      <h1>SpaceX Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceXComponent;
