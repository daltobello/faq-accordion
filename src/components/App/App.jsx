import { useState } from 'react';
import accordionData from '../../AccordionData/AccordionData';
import AccordionCard from '../AccordionCard/AccordionCard';
import './App.css';

function App() {
const [accordionFacts, setAccordionFacts] = useState(accordionData)

  // const { title, content } = accordionData;

  return (
    <div>
      <h1>Hello World</h1>
      <AccordionCard />
    </div>
  );
}

export default App;
