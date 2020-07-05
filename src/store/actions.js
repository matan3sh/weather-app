import weatherService from '../services/weatherService';

export const loadWeather = (city) => async (dispatch) => {
  try {
    const weather = await weatherService.query(city);
    dispatch({ type: 'SET_WEATHER', payload: weather });
  } catch (err) {
    console.log(err);
  }
};
