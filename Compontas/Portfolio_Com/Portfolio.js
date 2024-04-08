import React from 'react';
import './Portfolio.css'; // Import your CSS file
import { Link } from 'react-router-dom';
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: 'https://example.com/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: ''
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: ''
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: ''
  },
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: 'https://example.com/project1'
  },
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: 'https://example.com/project1'
  },
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: 'https://example.com/project1'
  },
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: 'https://example.com/project1'
  },
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'https://trion.kwst.net/dark/images/folio/1.jpg',
    url: 'https://example.com/project1'
  },
  // Add more projects as needed
];

const PortfolioSection = () => {
  return (
    <div className="portfolio">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <div className="project-details">
            <h3 className='form-heading'>{project.title}</h3>
            <p class="txt-secondary">{project.description}</p>
            <Link class="cus-inner-head-link color-bg">Visit Project</Link> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;
