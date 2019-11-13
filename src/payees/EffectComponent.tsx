import React, { useEffect } from 'react';

export const EffectComponent = () => {
  // Runs every render
  useEffect(() => {
    console.log('This runs on every render');
  }); // Note the lack of dependencies

  // Runs only on first render
  useEffect(() => {
    console.log('This runs on the first render only');
  }, []); // Empty dependencies array

  const foo = 1;
  // Runs any time foo changes
  useEffect(() => {
    console.log('This runs anytime foo changes');
  }, [foo]);

  // Runs before destruction
  useEffect(() => {
    console.log('This runs once, but cleans up before destruction.');

    return () => {
      console.log('This runs on destruction.');
    }
  }, []); // Have deps, don't have deps, not relevant here

  return <div></div>;
};
