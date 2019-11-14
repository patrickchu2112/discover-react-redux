import React from 'react';
import { connect } from 'react-redux';
import { DemosState } from './demos-reducer';

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
      &nbsp;{value}&nbsp;
      <button className="btn btn-info" onClick={increment}>
        Add
      </button>
    </div>
  );
};

const mapStateToProps = (state: DemosState) => ({
  value: state.counter,
});

const CounterDemoRedux = connect(mapStateToProps)(CounterDemo);

export default CounterDemoRedux;
