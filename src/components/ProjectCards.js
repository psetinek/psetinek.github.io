import React from 'react';
import ProjectCard from './ProjectCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './ProjectCards.css';
import SectionHeader from './SectionHeader';

const projectData = [
  {
    title: 'Subsea Neural Radiance Field (NeRF)',
    text: (
      <>
        <p>Master's Thesis project in collaboration with Aker BP. Improved state-of-the-art subsea NeRF and integrated it into{' '}
          <a href="https://docs.nerf.studio/" target="_blank" rel="noopener noreferrer">
            nerfstudio
          </a>{' '}
        , an open-source NeRF library.</p>
        <ul>
          <li>68% decrease in training and inference time.</li>
          <li>Increase in performance metrics.</li>
          <li>Conducted sensitivity and generalization analysis of the approach.</li>
        </ul>
      </>
    ),
    video: 'images/IUI3-RedSea_comp.mp4',  // Add your video source here
    buttons: [
      { href: 'https://github.com/AkerBP/seathru_nerf', label: 'Github', icon: faGithub },
      { href: 'documents/masters_thesis.pdf', label: 'Project Report', icon: faDownload }
    ]
  },
  {
    title: 'Computer Vision Community Course',
    text: (
      <>
        <p>A course on different aspects of Computer Vision, written and maintained by the Hugging Face Community.</p>
        <ul>
          <li>Contributed chaper 8 about 3D Computer Vision (sections on Linear Algebra and NeRFs).</li>
          <li>Reviewed and improved other sections across the whole course.</li>
        </ul>
      </>
    ),    image: 'images/hf.png',
    buttons: [
      { href: 'https://huggingface.co/learn/computer-vision-course/unit0/welcome/welcome', label: 'HuggingFace Course', icon: faGlobe }
    ]
  },
  {
    title: 'Modern Portfolio Theory resampled',
    text: (
      <>
        <p>Bachelor's Thesis project about the impact of sample size used for parameter estimation on the out-of-sample portfolio performance.</p>
        <ul>
          <li>Utilised a Monte Carlo study for uncertainty analysis.</li>
          <li>Parralelised code and deployed GoogleCloudPlatform (GCP) to handle computational load.</li>
        </ul>
      </>
    ),    image: 'images/bachelors_thesis.png',
    buttons: [
      { href: 'documents/bachelors_thesis.pdf', label: 'Project Report', icon: faDownload }
    ]
  }
];

function ProjectCards() {
  return (
    <div className="section">
      <SectionHeader title="Projects"/>
      <Row xs={1} md={3} className="g-4 align-items-stretch">
        {projectData.map((project, idx) => (
          <Col key={idx} className="d-flex">
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProjectCards;
