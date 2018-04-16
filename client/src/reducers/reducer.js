const initialState = {
  counter: [
    {
      count: 101
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MY_ACTION':
      return state;

    case 'MY_ACTION2':
      return state;
    default:
      return state;
  }
};
