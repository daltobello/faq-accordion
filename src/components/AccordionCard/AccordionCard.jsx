import React from 'react';
import { useState } from 'react';
import './AccordionCard.css';

function AccordionCard({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-facts">
      <section onClick={() => setIsOpen(!isOpen)}>
        <h3 className="accordion-title">{title}</h3>
        <div>{isOpen ? '-' : '+'}</div>
      </section>
      <article>
        {isOpen && <p className="accordion-content">{content}</p>}
      </article>
    </div>
  );
}

export default AccordionCard;
