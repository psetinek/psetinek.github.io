import React from 'react';
import './SectionHeader.css';

function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <span>{title}</span>
    </div>
  );
}

export default SectionHeader;
