import React from 'react';
import './AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const AboutMe = () => {
  return (
    <div id="about-wrapper" className="about-wrapper" id="aboutMe">
      <div className="about-left">
        <div className="about-left-content">
          <div>
            <div className="shadow">
              <div className="about-img">
                <img src="/grad.jpg" alt="about image" />
              </div>
            </div>

            <h2>David Lim</h2>
            <h3>Software developer</h3>
          </div>

          <ul className="icons">
            <a href="mailto:limdh1998@gmail.com"><li><FontAwesomeIcon icon={faEnvelope} /></li></a>
            <a href="https://www.linkedin.com/in/davidlim7223/"><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
            <a href="https://github.com/davidlim7223"><li><FontAwesomeIcon icon={faGithub} /></li></a>
          </ul>
        </div>
      </div>

      <div className="about-right">
        <h1>Hello<span>!</span></h1>
        <h2>안녕하세요<span>!</span></h2>
        <div className="about-btns">
          <a href="/David_Lim_Resume.pdf" download>
            <button type="button" className="btn btn-pink">resume / CV</button>
          </a>
        </div>

        <div className="about-para">
          <p>I'm a full stack web developer experienced in working with React, Javascript, HTML, CSS, PostgreSQL, and MongoDB.</p>
          <p> I am an Aerospace Engineering graduate and a motivated learner who stumbled upon my passion of web development through past internships.</p>
          <p>I desire to dive deeper into the world of software engineering and would love to work at a company that can grant me opportunities to do so!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;