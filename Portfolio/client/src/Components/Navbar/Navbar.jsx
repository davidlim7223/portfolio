import React from 'react';
import './Navbar.scss';
import Tooltip from '@mui/material/Tooltip';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactsIcon from '@mui/icons-material/Contacts';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='navList'>
        <li>
          <a href="#desc">
            <Tooltip title={<h2>Home</h2>} placement="bottom" arrow>
              <HomeIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </a>
        </li>
        <li>
          <a href='#aboutMe'>
            <Tooltip title={<h2>About Me</h2>} placement="bottom" arrow>
              <BadgeIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </a>
        </li>
        <li>
          <a href='#experience'>
            <Tooltip title={<h2>Work Experience</h2>} placement="bottom" arrow>
              <WorkIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </a>
        </li>
        <li>
          <a href='#funFacts'>
            <Tooltip title={<h2>Fun Facts</h2>} placement="bottom" arrow>
              <LightbulbIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </a>
        </li>
        <li>
          <a href='#contact'>
            <Tooltip title={<h2>Contact Me</h2>} placement="bottom" arrow>
              <ContactMailIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;