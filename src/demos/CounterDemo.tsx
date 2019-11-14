import React from 'react';
import { connect } from 'react-redux';
import { DemosState } from './demos-reducer';
import { Dispatch } from 'redux';
import {decrement, increment} from './demos-actions';

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

const mapStateToProps = ({demos}: {demos: DemosState}) => ({
  value: demos.counter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // Prop on component : dispatch(actionCreator())
  // increment: () => dispatch({type: 'INCREMENT'}),
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

const betterMapDispatchToProps = {
  increment, decrement
}

const CounterDemoRedux = connect(mapStateToProps, betterMapDispatchToProps)(CounterDemo);

export default CounterDemoRedux;

export {CounterDemo};
