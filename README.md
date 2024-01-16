# SpaceX Launch Information Webapp

This web application displays information about past and future SpaceX launches and rockets. It is developed using React for the frontend and Spring Boot for the backend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Building the Docker Images](#building-the-docker-images)
  - [Running the Application](#running-the-application)
- [Usage](#usage)

## Prerequisites

- Docker installed on your machine. [Get Docker](https://docs.docker.com/get-docker/)

## Getting Started

### Building the Docker Images

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <directory>
   ```

2. Build the React frontend Docker image:

   ```bash
   cd SpaceXTest
   docker build -t space-x-frontend .
   ```

3. Build the Spring Boot backend Docker image:

   ```bash
   Copy code
   cd ../backend
   docker build -t space-x-backend .
   ```

4. Running the Application
   Run the Docker Compose to start both frontend and backend containers:
   ```bash
   docker-compose up
   ```

The application should now be accessible at:

Frontend: http://localhost:3000

Backend: http://localhost:8080

### Usage

Open your web browser and navigate to http://localhost:3000 to access the SpaceX Launch Information Webapp.
Explore rocket information, launches, and utilize sort functionalities.
