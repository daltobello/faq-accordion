import { useState } from 'react';
import accordionData from '../../AccordionData/AccordionData';
import AccordionCard from '../AccordionCard/AccordionCard';
import './App.css';

function App() {
const [accordionFacts, setAccordionFacts] = useState(accordionData)

  return (
    <div>
      <h1>Hello World</h1>
      <AccordionCard accordionFacts={accordionFacts}/>
    </div>
  );
}

export default App;
