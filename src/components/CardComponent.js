import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CardComponent({ image, video, title, text, buttons }) {
  return (
    <Card className="card-custom">
      {image && <Card.Img variant="top" src={image} />}
      {video && (
        <video width="100%" height="auto" loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <Card.Body className="d-flex flex-column">
        {title && <Card.Title>{title}</Card.Title>}
        <Card.Text className="flex-grow-1">{text}</Card.Text>
        {buttons && buttons.map((button, index) => (
          <Button 
            key={index} 
            href={button.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary mx-1">
            {button.icon && <FontAwesomeIcon icon={button.icon} />} {button.label}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
