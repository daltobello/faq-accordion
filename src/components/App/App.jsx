import { useState } from 'react';
import AccordianCard from '../AccordianCard/AccordianCard';
import './App.css';

function App() {
  const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  const { title, content } = accordionData;

  return (
    <div>
      <h1>Hello World</h1>
      <AccordianCard />
    </div>
  );
}

export default App;
