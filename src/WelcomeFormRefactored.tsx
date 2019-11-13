import React, { useState } from 'react';

interface NameFieldProps {
  updateName: (name: string) => void;
}

const NameField = ({ updateName }: NameFieldProps) => {
  const [yourName, setYourName] = useState('');

  const handleBlur = () => {
    updateName(yourName);
  };

  return (
    <React.Fragment>
      <label htmlFor="your-name">Please enter your name: </label>
      <input
        type="text"
        id="your-name"
        onChange={e => setYourName(e.target.value)}
        value={yourName}
        onBlur={handleBlur}
      />
    </React.Fragment>
  );
};

interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return (
    <div>
      <p>Hello, {name}</p>
    </div>
  );
};

interface ToggleButtonProps {
  toggle: (on: boolean) => void;
  onOrOff: boolean;
}
const ToggleButton = ({ toggle, onOrOff }: ToggleButtonProps) => {
  return (
    <button type="button" onClick={() => toggle(!onOrOff)}>
      {onOrOff ? 'Hide' : 'Show'}
    </button>
  );
};

const WelcomeForm = () => {
  const [name, setName] = useState('');
  const [status, toggleStatus] = useState(false);

  return (
    <div>
      <NameField updateName={setName} />
      <ToggleButton toggle={() => toggleStatus(!status)} onOrOff={status} />
      <br />
      {status ? <Greeting name={name} /> : <div />}
    </div>
  );
};

export default WelcomeForm;
