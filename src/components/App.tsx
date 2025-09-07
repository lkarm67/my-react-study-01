// src/components/App.tsx
/*
import Product from "./Product";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
    </>
  );
}
*/


/*
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>Clicked: {count}</button>
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
      </button>

      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
    </>
  );
}
*/


/*
// src/App.tsx

import { useState } from "react";

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>x: {values.x}, y: {values.y}</p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
}
*/



import { useState } from 'react';

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={() => updateValue('x')}>Update x</button>
      <button onClick={() => updateValue('y')}>Update y</button>
    </div>
  );
}