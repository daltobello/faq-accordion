import React from 'react';
import './AccordionCard.css';

function AccordionCard({accordionFacts}) {
  const accordionInfo = accordionFacts.map((fact) => {
    return (
      <div className='accordion-facts'>
      <section>
        <h3 className='accordion-title'>{fact.title}</h3>
      </section>
      <article>
        <p className='accordion-content'>{fact.content}</p>
      </article>
      </div>
    )
  })

  return (
    <div className='accordion-card-container'>
      <h1>FAQs</h1>
      <h2>What is Frontend Mentor, and how will it help me?</h2>
      {accordionInfo}
    </div>
  );
}

export default AccordionCard;
