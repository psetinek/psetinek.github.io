import React from 'react';
import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard';

const experiences = [
    {
      logo: 'images/zeiss_logo.png',
      logoLink: 'https://www.zeiss.com/microscopy/en/products/software/zeiss-solutions-lab.html',
      title: 'Software Engineer (Microscopy Automation and Computer Vision)',
      subtitle: 'Zeiss Solutions Lab - Internship',
      description: [
        'Led microscopy automation projects for clients in the automotive and medical industries.',
        'Collaborated closely with clients to gather requirements, negotiate project scope, and ensure solutions alignment.',
        'Designed and implemented a large-scale project focused on automated welding measurements, involving distributed image acquisition, analysis, and visualisation across multiple machines. Created the database schema and implemented a SQL database for efficient data management and retrieval.'
      ],
      timestamp: 'Oct 2023 - present'
    },
    {
      logo: 'images/tu_logo.png',
      logoLink: 'https://www.tuwien.at/en/',
      title: 'Teaching Assistant Continuous Simulation',
      subtitle: 'Vienna University of Technology - Part time',
      description: ['Responsibilities: Organised and held programming exercises for up to 200 students and supervised groups with individual projects.',
        'Taught Coursework: Modelling and Simulation, Numeric Algorithms, solving ODEs and discrete difference equations using Matlab/Simulink and Python.'
      ],
      timestamp: 'Feb 2021 - Nov 2022'
    },
    {
      logo: 'images/alrag_logo.png',
      logoLink: 'https://www.alrag.at/',
      title: 'Asset Management',
      subtitle: 'Alrag - Internship',
      description: ['Developed a web scraping tool using Python and BeautifulSoup to automatically extract data from various websites, identifying potential properties for the acquisitions team.',
        'Created and maintained an executable that streamlined part of the acquisition process from multiple hours to around a minute, increasing efficiency by over 95%.',
        'Asset Management: Managing Responsibilities: Responsible for managing and evaluating real estate projects (DCF method combined with qualitative analysis of buildings) and preparing portfolio reports for internal and external use together with the board.'
        ],
      timestamp: 'Aug 2020 - Nov 2020'
    }
  ];

  const educations = [
    {
      logo: 'images/imperial_logo.png',
      logoLink: 'https://www.imperial.ac.uk/',
      title: 'Imperial College London',
      subtitle: 'MSc Applied Computational Science and Engineering',
      description: ['GPA: distinction',
        'Relevant Coursework: Advanced Programming, Computational Mathematics, Data Science & Machine Learning, Deep Learning, Modelling and Numerical Methods, Inversion and Optimisation, Patterns in Parallel Programming',
        'Led group projects in data science, deep learning, numerical simulation, parallel programming.'
        ],
      timestamp: '2022 - 2023'
    },
    {
      logo: 'images/tu_logo.png',
      logoLink: 'https://www.tuwien.at/en/',
      title: 'Vienna University of Technology',
      subtitle: 'BSc Mechanical Engineering - Management',
      description: ['GPA: 1.9 (1-5, with 1 being best)',
        'Relevant Coursework: Mathematics, Mechanics, Control Engineering, Fluid Mechanics, Statistics, Management, Finance and Optimisation',
        <>
          Continuous Simulation Publication: Grujic, M., Haupt, J., Hossain, Y., Klimon, L., Setinek, P., & Breitenecker, F. (2021). ARGESIM Benchmark C7: Solution in MATLAB Environment and Integration into TU Vienna’s MMT E-Learning Environment. Simulation Notes Europe SNE, 31(4), 239-254.{' '}
          <a
            href="https://doi.org/10.11128/sne.31.bne07.10589"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.11128/sne.31.bne07.10589
          </a>
        </>     
        ],
      timestamp: '2017 - 2022'
    },
    {
      logo: 'images/tu_logo.png',
      logoLink: 'https://www.tuwien.at/en/',
      title: 'Vienna University of Technology',
      subtitle: 'Extension Program Bachelor - Digital Skills',
      description: ['GPA: 1.4 (1-5, with 1 being best)',
        'Relevant Coursework: Foundations of Information Systems, Data Analysis and Visualisation, Security and Privacy',
        'C++ Project for custom library with Python bindings'
      ],
      timestamp: '2021 - 2022'
    },
  ];

function Experience() {
    return (
        <div className="section">
          <SectionHeader title="Experience"/>
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} {...experience} />
          ))}
          <SectionHeader title="Education"/>
          {educations.map((education, idx) => (
            <ExperienceCard key={idx} {...education} />
          ))}
        </div>
      );
}

export default Experience
