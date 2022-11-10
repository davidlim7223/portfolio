import React from 'react';
import { Outlet,Link } from "react-router-dom";
import './Navbar.scss';
import Tooltip from '@mui/material/Tooltip';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactsIcon from '@mui/icons-material/Contacts';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='navList'>
        <li>
          <Link to='/'>
            <Tooltip title="Home" placement="bottom" arrow>
              <HomeIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to='/aboutMe'>
            <Tooltip title="About Me" placement="bottom" arrow>
              <BadgeIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to='/experience'>
            <Tooltip title="Work Experience" placement="bottom" arrow>
              <WorkIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to='/personalProject'>
            <Tooltip title="Personal Projects" placement="bottom" arrow>
              <FolderIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to='/contactMe'>
            <Tooltip title="Contact Me" placement="bottom" arrow>
              <ContactMailIcon fontSize="large" color="action" sx={{ '&:hover': {color: "orange"} }}/>
            </Tooltip>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;