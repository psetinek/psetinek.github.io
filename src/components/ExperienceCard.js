import React from 'react';
import Card from 'react-bootstrap/Card';
import './ExperienceCard.css';
import './CardComponent.css'; // Import the CardComponent CSS to use card-custom class

function ExperienceCard({ logo, logoLink, title, subtitle, description, timestamp }) {
  return (
    <Card className="card-custom experience-card">
      <Card.Body className="experience-body">
        <div className="experience-header">
          {logo && (
            <a href={logoLink} target="_blank" rel="noopener noreferrer" className="experience-logo-link">
              <img src={logo} alt="Company Logo" className="experience-logo" />
            </a>
          )}
          <div className="experience-title">
            <Card.Title>{title}</Card.Title>
            {subtitle && <Card.Subtitle className="experience-subtitle">{subtitle}</Card.Subtitle>}
          </div>
          {timestamp && <span className="experience-timestamp">{timestamp}</span>}
        </div>
        <div className="experience-description">
          {Array.isArray(description) ? (
            <div className="description-columns">
              <ul>
                {description.slice(0, Math.ceil(description.length / 2)).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul>
                {description.slice(Math.ceil(description.length / 2)).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <Card.Text>{description}</Card.Text>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
