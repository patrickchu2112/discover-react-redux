import React from 'react';

interface CounterDemoProps {
  // Counter prop
  value: number;

  // Custom events
  increment: () => void;
  decrement: () => void;
}
const CounterDemo = ({ value, increment, decrement }: CounterDemoProps) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={decrement}>
        Subtract
      </button>
      {value}
      <button className="btn btn-info" onClick={increment}>
        Add
      </button>
    </div>
  );
};

export default CounterDemo;
