import React from 'react';
import { Card, Grid, Spacer, Text } from '@nextui-org/react';
import { FaJava, FaDocker, FaPython, FaGithub } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { SiSpringboot, SiMysql, SiJavascript, SiMongodb, SiHibernate } from 'react-icons/si';

const skills = {
  'Programming Languages': [
    { name: 'JAVA', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'JavaScript', icon: SiJavascript },
    // Add more programming languages with icons
  ],
  'Frameworks': [
    { name: 'SpringBoot', icon: SiSpringboot },
    { name: 'ReactJS', icon: GrReactjs },
    { name: 'Hibernate', icon: SiHibernate },
    // Add more frameworks with icons
  ],
  'Tools and Software': [
    { name: 'Docker', icon: FaDocker },
    { name: 'Github', icon: FaGithub },
    // Add more tools and software with icons
  ],
  'Database': [
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
    // Add more databases with icons
  ],
};

const Skills = () => {
  return (
    <Grid.Container gap={2}>
      {Object.entries(skills).map(([category, skillsList]) => (
        <Grid key={category} xs={12} sm={6} md={4} lg={3}>
          <Spacer y={1} />
          <Card style={{width:"15rem"}}>
            <Card.Body>
              <Text b style={{ marginBottom: '0.4rem' }}>
                {category}
              </Text>
              {skillsList.map((skill, index) => (
                <div key={`${category}-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
                  {React.createElement(skill.icon, { size: 20, style: { marginRight: '5px', marginLeft: '5px' } })}
                  <Text>{skill.name}</Text>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Skills;
