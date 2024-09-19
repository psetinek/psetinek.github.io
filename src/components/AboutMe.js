import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from './CardComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTools, faLanguage } from '@fortawesome/free-solid-svg-icons';


import './AboutMe.css';

function AboutMe() {
  return (
    <div className="section">
      <div className="section-divider"></div>
      <Row className="justify-content-center">
        <Col md={6} lg={6} xl={6} className="mt-4 d-flex justify-content-center">
          <CardComponent
            text={
              <>
                <div className="skills-header">
                  <FontAwesomeIcon icon={faUserTie} className="me-2" />
                  <h5>About Me</h5>
                </div>
                <p>
                  After shifting my focus from Mechanical Engineering to Computer Science, I graduated with distinction from
                  Imperial College London, earning an MSc in Applied Computational Science and Engineering. My academic journey
                  has equipped me with a strong foundation in numerical methods, advanced programming, computational mathematics,
                  data science, machine learning, and deep learning.
                </p>
                <p>
                  Lately, I have immersed myself in the world of Computer Vision. For my final research project, I implemented a{' '}
                  <a href="https://github.com/AkerBP/seathru_nerf" target="_blank" rel="noopener noreferrer">
                    Neural Radiance Field (NeRF)
                  </a>{' '}
                  tailored to the subsea domain, which outperformed the then state-of-the-art
                  models in the field. In the past few months, I have been at{' '}
                  <a href="https://www.zeiss.com/microscopy/en/products/software/zeiss-solutions-lab.html" target="_blank" rel="noopener noreferrer">
                    Zeiss Solutions Lab
                  </a>{' '}
                  developing microscopy automation projects for various industries. This experience has provided me with
                  practical insight into implementing cutting-edge solutions in real-world applications.
                </p>
                <p>
                  I am excited about what the future brings and am always open to collaborations. If you have something in mind,
                  feel free to contact me!
                </p>
              </>
 
            }
            buttons={[
              { href: 'documents/CV_Paul_Setinek.pdf', label: 'Curriculum Vitae', icon: faDownload }
            ]}
          />
        </Col>
        <Col md={6} lg={6} xl={6} className="mt-4">
          <CardComponent
            // Remove the 'title' prop since we don't need the overall 'Skills' header
            text={
              <>
                {/* Row for the two columns */}
                <div className="skills-row">
                  {/* Proficient In Column */}
                  <div className="skills-column">
                    <div className="skills-header">
                      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                      <h5>Proficient In</h5>
                    </div>
                    <ul>
                      <li>C++</li>
                      <li>Python</li>
                      <li>PyTorch</li>
                      <li>SQL</li>
                      <li>Git</li>
                      <li>Bash</li>
                    </ul>
                  </div>
                  {/* Exposed To Column */}
                  <div className="skills-column">
                    <div className="skills-header">
                      <FontAwesomeIcon icon={faTools} className="me-2" />
                      <h5>Exposed To</h5>
                    </div>
                    <ul>
                      <li>OpenCV</li>
                      <li>JavaScript & React</li>
                      <li>C#</li>
                      <li>Matlab & Simulink</li>
                      <li>Project Management</li>
                    </ul>
                  </div>
                </div>
                {/* Languages Section */}
                <div className="languages-section">
                  <div className="skills-header">
                    <FontAwesomeIcon icon={faLanguage} className="me-2" />
                    <h5>Languages</h5>
                  </div>
                  <ul>
                    <li>German (native)</li>
                    <li>English (fluent)</li>
                    <li>French (intermediate)</li>
                  </ul>
                </div>
              </>
            }
          />
      </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
