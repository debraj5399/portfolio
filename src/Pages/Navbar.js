import React, { useRef, useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState(null);
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
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const [key, ref] of Object.entries(sectionRefs)) {
        const element = ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const collapseItems = ['About', 'Experience', 'Skills', 'Project', 'Contact'];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
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
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
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
            <Button auto flat as={Link} onClick={() => handleLinkClick('Contact')}>
              Contact
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? '$error' : '',
              }}
              isActive={activeSection === item}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: '100%',
                }}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <Section sectionRefs={sectionRefs} />
    </Layout>
  );
}

export default NavbarComp;
