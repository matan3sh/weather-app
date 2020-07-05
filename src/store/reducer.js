const initialState = {
  weather: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        weather: action.payload
      };
    default:
      return state;
  }
}
