import React from 'react';
import { useState } from 'react';
import './AccordionCard.css';

function AccordionCard({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <p className="accordion-content">{content}</p>}
    </div>
  );
}

export default AccordionCard;
