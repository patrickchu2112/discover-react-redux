const demoActions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

const increment = () => ({
  type: demoActions.INCREMENT
})

const decrement = () => ({
  type: demoActions.DECREMENT
})

export {demoActions, increment, decrement};