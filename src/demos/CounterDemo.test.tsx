import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CounterDemo } from './CounterDemo';

describe('CounterDemo', () => {
  let value: number, increment: jest.Mock, decrement: jest.Mock;
  beforeEach(() => {
    value = 5;
    increment = jest.fn();
    decrement = jest.fn();
  });

  it('should capture a click', () => {
    const {getByText} = render(
      <CounterDemo value={value} increment={increment} decrement={decrement} />,
    );

    fireEvent.click(getByText('Add'));
    expect(increment).toHaveBeenCalled();
    expect(increment).toHaveBeenCalledTimes(1);
  });
});
