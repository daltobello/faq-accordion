import { useState } from 'react';
import accordionData from '../../AccordionData/AccordionData';
import AccordionCard from '../AccordionCard/AccordionCard';
import './App.css';
// import Header from '../Header/Header';

function App() {
  const [accordionFacts, setAccordionFacts] = useState(accordionData);

  return (
    <div className="app">
      {/* <Header /> */}
      <div className="accordion-wrapper">
        <div className="accordion">
          <h1 className="faqs-heading">FAQs</h1>
          {accordionFacts.map(({ title, content }) => (
            <AccordionCard title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
