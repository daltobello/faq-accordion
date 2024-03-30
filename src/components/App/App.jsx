import { useState } from "react";
import accordionData from "../../AccordionData/accordionData";
import AccordionCard from "../AccordionCard/AccordionCard";
import "./app.css";

function App() {
  const [accordionFacts] = useState(accordionData);

  return (
    <div className='app'>
      <AccordionList items={accordionFacts} />
    </div>
  );
}

const AccordionList = ({ items }) => (
  <div className='accordion-wrapper'>
    <div className='accordion'>
      <TitleWrapper />
      {items.map(({ id, title, content}) => (
        <AccordionCard key={id} title={title} content={content} />
      ))}
    </div>
  </div>
);

const TitleWrapper = () => (
  <div className='title-wrapper'>
    <img src='src/assets/images/icon-star.svg' alt='star icon' />
    <h1 className='faqs-heading'>FAQs</h1>
  </div>
);


export default App;
