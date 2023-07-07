import React from 'react';
import { BsLinkedin, BsGithub, BsCodeSlash } from 'react-icons/bs';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { Button } from '@nextui-org/react';

function SideNav() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          position: 'fixed',
          right: '10px',
          top: '40%',
        }}
      >
        <Button
          style={{ marginBottom: '0.8rem' }}
          size={32}
          light
          color="default"
          auto
          icon={<PiInstagramLogoThin size={25} />}
          onClick={() =>
            window.open('https://www.instagram.com/d.e.b.r.a.j/', '_blank')
          }
        />
        <Button
          style={{ marginBottom: '0.8rem' }}
          size={32}
          light
          color="default"
          auto
          icon={<BsLinkedin size={25} />}
          onClick={() =>
            window.open('https://www.linkedin.com/in/debraj-banik', '_blank')
          }
        />
        <Button
          style={{ marginBottom: '0.8rem' }}
          size={32}
          light
          color="default"
          auto
          icon={<BsGithub size={25} />}
          onClick={() =>
            window.open('https://github.com/debraj5399', '_blank')
          }
        />
        <Button
          size={32}
          light
          color="default"
          auto
          icon={<BsCodeSlash size={25} />}
          onClick={() =>
            window.open('https://leetcode.com/debrajbanik/', '_blank')
          }
        />
      </div>

      <style jsx>{`
        @media only screen and (max-width: 768px) {
          div {
            top: 15% !important;
          }
        }
      `}</style>
    </>
  );
}

export default SideNav;
