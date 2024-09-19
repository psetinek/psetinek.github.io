import React from 'react';
import CardComponent from './CardComponent';
import './ProjectCard.css';


function ProjectCard({ title, text, image, video, buttons }) {
  return (
    <CardComponent
      image={image}
      video={video}
      text={
        <>
        <div className="skills-header">
          <h5>{title}</h5>
        </div>
        {text}
        </>}
      buttons={buttons.map(button => ({
        href: button.href,
        label: button.label,
        icon: button.icon
      }))}
    />
  );
}

export default ProjectCard;
