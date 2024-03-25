import React, { useState, useRef, useEffect } from 'react';
import './AccordionCard.css';

function AccordionCard({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null)

  useEffect(() => {
    if(contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen])

  return (
    <div className='accordion-item'>
      <div className="accordion-title-wrapper" onClick={() => setIsOpen(!isOpen)}>
        <h3 className='title'>{title}</h3>
        <div>{isOpen ? (
          <img src="src/assets/images/icon-minus.svg" alt="minus icon" />
        ) : (
          <img src='src/assets/images/icon-plus.svg' alt='plus icon'/>
        )
      }</div>
      </div>
      <div className="accordion-content" ref={contentRef}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default AccordionCard;
