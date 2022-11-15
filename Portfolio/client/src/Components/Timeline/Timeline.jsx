import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';
import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
const Timeline = () => {
  return (
    <div id='experience'>
      <h1 className='timeline'>Work Experiences</h1>
      <br></br>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2022"
          dateClassName={"dates"}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Hackreactor Graduate</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Graduated from Hackreactor with an advanced software engineering certificate
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          dateClassName={"dates"}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Engineered an interactive mobile-first application called Encompass to aid in the scheduling and managing of tasks
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          dateClassName={"dates"}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">Backend Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Turned a monolithic legacy API into multiple scalable microservices to accommodate higher traffic
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          dateClassName={"dates"}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Created a web page for an E-Commerce business to dynamically display requested products, their descriptions and reviews
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          dateClassName={"dates"}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Virginia Tech Graduate</h3>
          <h4 className="vertical-timeline-element-subtitle">Blacksburg, VA</h4>
          <p>
            Graduated from Virginia Tech with a Bachelor's degree in Aerospace Engineering
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          dateClassName={"dates"}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">CACI, Inc</h4>
          <p>
            Created a web app to view current/ previous sprint planning for scrum teams using Javascript, HTML, and CSS for the frontend and MongoDB as the database
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          dateClassName={"dates"}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">Systems Engineer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Inertial Labs, Inc</h4>
          <p>
            Automated data collection and analysis by a combination of Bash scripting and MATLAB
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;