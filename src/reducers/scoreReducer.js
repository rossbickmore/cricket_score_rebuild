const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case 'one':
      return state + 1;
    case 'two':
      return state + 2;
    case 'three':
      return state + 2;
    case 'three':
      return state + 3;
    case 'four':
      return state + 4;
    case 'five':
      return state + 5;
    case 'six':
      return state + 6;
    default: // if none of the above matches, code comes here
      return state;
  }
};
export default scoreReducer