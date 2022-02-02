const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index < state.colors.length -1 ? state.index + 1 : 0,
      }
    
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : 0,
      }
    
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.randomColor],
        index: state.colors.length,
      }

    default: state;
  }
}
