import { useState } from 'react';
import accordionData from '../../AccordionData/AccordionData';
import AccordionCard from '../AccordionCard/AccordionCard';
import './App.css';

function App() {
  const [accordionFacts, setAccordionFacts] = useState(accordionData);

  return (
    <div>
      <div>
        {accordionFacts.map(({ title, content }) => (
          <AccordionCard title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
