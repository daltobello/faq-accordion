import { useState } from "react";
import accordionData from "../../AccordionData/AccordionData";
import AccordionCard from "../AccordionCard/AccordionCard";
import "./App.css";

function App() {
  const [accordionFacts, setAccordionFacts] = useState(accordionData);

  return (
    <div className='app'>
      <div className='accordion-wrapper'>
        <div className='accordion'>
          <div className="title-wrapper">
            <img src='src/assets/images/icon-star.svg' alt='star icon' />
            <h1 className='faqs-heading'>FAQs</h1>
          </div>
          {accordionFacts.map(({ title, content }) => (
            <AccordionCard title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
