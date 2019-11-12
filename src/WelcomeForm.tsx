import React from 'react'

const WelcomeForm = () => {
  function clickHandler() {
    console.log('You clicked on the button');
  }

  return (
    <div>
      <button type="button" onClick={clickHandler}>Click me!</button>
    </div>
  )
}

export default WelcomeForm;
