import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './Portfolio.css';

const skillsData = [
  { skill: 'Ecommerce', level: 90 },
  { skill: 'Ecommerce', level: 85 },
  { skill: 'Ecommerce', level: 80 },
  { skill: 'Ecommerce', level: 80 },
  { skill: 'Ecommerce', level: 80 },
  { skill: 'Ecommerce', level: 80 },
  { skill: 'Ecommerce', level: 80 },
  { skill: 'Ecommerce', level: 80 },
  // Add more skills as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
        <div className='contact-form-section'>
         <div class="sec-dec"></div>
            <div className="contact-container">
                <h2 className='form-heading'>MY <span>Skills and Abilities</span></h2>
                <p class="txt-secondary">Internet tend to repeat predefined chunks look even slightly believable If you are going to use a passage of Lorem Ipsum.</p>

            </div>
           
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <h2 className='skill-title'>{skill.skill}</h2>
            <div className="progressbar-wrapper">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: '#999',
                  pathColor: '#f7b90f',
                  trailColor: '#3f3f44',
                })}
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;