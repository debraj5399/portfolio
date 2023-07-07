/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Button, Text } from '@nextui-org/react';
import { BsLinkedin, BsGithub, BsCodeSlash } from 'react-icons/bs';
import { PiInstagramLogoThin } from 'react-icons/pi';


export default function About(props) {
  const [textLines, setTextLines] = useState(['', '', '']);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const textContent = [
    'Hello,',
    "I'm Debraj Banik",
    'Software Engineer'
  ];


  useEffect(() => {
    props.checkTrue(showAbout);
  }, [showAbout])
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (currentCharIndex < textContent[currentLineIndex].length) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }
      } catch (e) { }
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, [currentCharIndex, currentLineIndex]);

  useEffect(() => {
    try {
      if (currentLineIndex < textContent.length) {
        const newTextLines = [...textLines];
        newTextLines[currentLineIndex] = textContent[currentLineIndex].substring(0, currentCharIndex);
        setTextLines(newTextLines);
      } else {
        setShowAbout(true);
      }
    } catch (e) { }
  }, [currentCharIndex, currentLineIndex, textLines]);

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1iogrv66wqr-BX9PFmICjpjJnAB8TPANQ/view', '_blank');
  };
  const handleHireMe = () => {
    window.location.href = 'mailto:writetodebrajbanik@gmail.com';
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {textLines.map((line, index) => (
            <Text
              key={index}
              h1
              size={40}
              css={{
                textGradient: index === 0
                  ? '45deg, $blue600 -20%, $pink600 50%'
                  : index === 1
                    ? '45deg, $purple600 -20%, $pink600 100%'
                    : '45deg, $yellow600 -20%, $red600 100%',
              }}
              weight="bold"
            >
              {line}
            </Text>
          ))}
          {showAbout && (
            <><div style={{ display: 'flex', marginTop: '2rem' }}>
              <Button
                color="gradient"
                auto
                ghost
                style={{ opacity: 0, animation: 'fadeIn 1s forwards', marginRight: '1rem' }}
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
              <Button
                color="warning"
                auto
                ghost
                style={{ opacity: 0, animation: 'fadeIn 1s forwards' }}
                onClick={handleHireMe}
              >
                Hire Me
              </Button>
            </div>
              <div style={{ marginTop: '2rem', opacity: 0, animation: 'fadeIn 1s forwards' }}>
                <Text h3>About Me</Text>
                <Text>
                  Experienced software engineer with 2 years of professional expertise.
                  <br />
                  Skilled in Java, Javascript, and Python, with a focus on object-oriented design and agile methodologies.
                  <br />
                  Proficient in front-end and back-end development, database management, and API integration.
                  <br />
                  Committed to delivering high-quality, scalable software solutions.
                  <br />
                  Passionate about continuous learning and staying updated with industry trends.
                  <br />
                  Ready to contribute to your projects and drive efficiency.
                  <br />
                  Let's connect and discuss your software development needs.
                </Text>

              </div></>

          )}
        </div>
        {showAbout && (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', marginTop: "10rem" }}>
            <Button
              style={{ marginBottom: '0.8rem' }}
              size={32}
              light
              color="default"
              auto
              icon={<PiInstagramLogoThin size={25} />}
              onClick={() => window.open('https://www.instagram.com/d.e.b.r.a.j/', '_blank')}
            />
            <Button
              style={{ marginBottom: '0.8rem' }}
              size={32}
              light
              color="default"
              auto
              icon={<BsLinkedin size={25} />}
              onClick={() => window.open('https://www.linkedin.com/in/debraj-banik', '_blank')}
            />
            <Button
              style={{ marginBottom: '0.8rem' }}
              size={32}
              light
              color="default"
              auto
              icon={<BsGithub size={25} />}
              onClick={() => window.open('https://github.com/debraj5399', '_blank')}
            />
            <Button
              size={32}
              light
              color="default"
              auto
              icon={<BsCodeSlash size={25} />}
              onClick={() => window.open('https://leetcode.com/debrajbanik/', '_blank')}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
