import React, { useRef, useState } from 'react';
import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { Layout } from './Layout';
import '../Components/portfolio.css';
import Section from './Section';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { CiDark, CiLight } from 'react-icons/ci';

function NavbarComp() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const [activeLink, setActiveLink] = useState('About');
  const sectionRefs = {
    About: useRef(null),
    Experience: useRef(null),
    Skills: useRef(null),
    Project: useRef(null),
    Contact: useRef(null),
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const yOffset = -80; // Adjust this value to set the desired scroll position offset
    const element = sectionRefs[link].current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text
            h3
            css={{
              marginTop: '1rem',
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
            weight="bold"
          >
            Portfolio
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link
            isActive={activeLink === 'About'}
            onClick={() => handleLinkClick('About')}
          >
            About Me
          </Navbar.Link>
          <Navbar.Link
            isActive={activeLink === 'Experience'}
            onClick={() => handleLinkClick('Experience')}
          >
            Experience
          </Navbar.Link>
          <Navbar.Link
            isActive={activeLink === 'Skills'}
            onClick={() => handleLinkClick('Skills')}
          >
            Skills
          </Navbar.Link>
          <Navbar.Link
            isActive={activeLink === 'Project'}
            onClick={() => handleLinkClick('Project')}
          >
            Project
          </Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Button
            light
            color="default"
            auto
            icon={!isDark ? <CiDark /> : <CiLight />}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          />
          <Navbar.Item>
            <Button
              auto
              flat
              as={Link}
              onClick={() => handleLinkClick('Contact')}
            >
              Contact
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Section sectionRefs={sectionRefs} />
    </Layout>
  );
}

export default NavbarComp;
