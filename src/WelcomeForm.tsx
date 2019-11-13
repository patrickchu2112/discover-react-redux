import React, { ChangeEvent, useState } from 'react';

const WelcomeForm = () => {
  const [yourName, setYourName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setYourName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="your-name">Please enter your name: </label>
      <input
        type="text"
        id="your-name"
        onChange={changeHandler}
        value={yourName}
      />
      <button type="button" onClick={() => setShowGreeting(!showGreeting)}>
        Click me!
      </button>
      <div hidden={yourName.length < 3 || !showGreeting}>
        <p>Hello, {yourName}</p>
      </div>
    </div>
  );
};

export default WelcomeForm;
