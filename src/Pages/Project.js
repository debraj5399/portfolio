import React from 'react';
import { Card, Grid, Spacer, Text, Link, Button } from '@nextui-org/react';

const projects = [
  {
    title: 'Casflo',
    description: 'Simplified and Secure Payment Processing between Partner & Client, for businesses of all sizes. (WIP)',
    link: 'https://casflo.netlify.app',
  },
  {
    title: 'CodeMemo',
    description: 'A simplified note-taking application.',
    link: 'https://codememo.netlify.app',
  },
  // Add more projects with their details and links
];

const Projects = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Projects</h1>
      </div>
      <Grid.Container gap={2} justify="center">
        {projects.map((project, index) => (
          <Grid key={index} xs={12} sm={6} md={4} lg={3}>
            <Spacer y={1} />
            <Card shadow style={{ width: "15rem", borderRadius: '10px', padding: '1rem' }}>
              <Card.Body>
                <Text b style={{ marginBottom: '0.4rem', fontSize: '1.2rem' }}>
                  {project.title}
                </Text>
                <Text>{project.description}</Text>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <Link href={project.link} target="_blank">
                    <Button color="info" auto style={{ color: 'white', marginTop: '0.5rem' }}>View Project</Button>
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
