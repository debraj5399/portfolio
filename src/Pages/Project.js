import React from "react";
import { Card, Grid, Spacer, Text, Link, Button } from "@nextui-org/react";

const projects = [
  {
    title: "Youtube‐App",
    description:
      "Frontend for a YouTube application, incorporating Google APIs for streamlined search functionality and video playback.",
    link: "https://youtube-bydebraj.netlify.app/",
  },
  {
    title: "Netflix‐GPT",
    description:
      "Developed amovie browsing application’s frontend, allowing users to register, log in, and browse popular, trending, and upcomingmovies Utilized Redux for managing user and movie state, and incorporated a movie trailer playback feature.",
    link: "https://github.com/debraj5399/NetflixGPT",
  },
  {
    title: "Quizaster Backend",
    description:
      "Developed and implemented RESTful APIsfor a quiz application, including question creation, postmanagement & categoryfunctionalities.",
    link: "https://github.com/debraj5399/quiz-app",
  },
  {
    title: "Ecommerce‐Backend",
    description:
      "Developed a Spring Boot‐based eCommerce backend, delivering a 30% reduction in response times and enhancing user satisfaction by 40%.",
    link: "https://github.com/debraj5399/ecommerce-backend",
  },
  {
    title: "Casflo",
    description:
      "Simplified and Secure Payment Processing between Partner & Client, for businesses of all sizes. (WIP)",
    link: "https://casflo.netlify.app",
  },
  {
    title: "CodeMemo",
    description: "A simplified note-taking application.",
    link: "https://codememo.netlify.app",
  },
  // Add more projects with their details and links
];

const Projects = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Projects</h1>
      </div>
      <Grid.Container gap={2} justify="center">
        {projects.map((project, index) => (
          <Grid key={index} xs={12} sm={6} md={4} lg={3}>
            <Spacer y={1} />
            <Card
              shadow
              style={{
                width: "100%",
                borderRadius: "10px",
                padding: "1rem",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Card.Body>
                <Text b style={{ marginBottom: "0.4rem", fontSize: "1.2rem" }}>
                  {project.title}
                </Text>
                <Text>{project.description}</Text>
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link href={project.link} target="_blank">
                    <Button
                      color="info"
                      auto
                      style={{
                        color: "white",
                        marginTop: "1rem",
                      }}
                    >
                      View Project
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Projects;
