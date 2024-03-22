import React from 'react';
import { useState } from 'react';
import './AccordionCard.css';

function AccordionCard({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default AccordionCard;
