import React from 'react';
import { connect } from 'react-redux';
import { loadWeather } from '../../store/actions';
import WeatherFilter from '../weather/WeatherFilter';
import WeatherMain from '../weather/WeatherMain';
import WeatherList from '../weather/WeatherList';

const Home = ({ loadWeather, weather }) => {
  const onSearch = (city) => loadWeather(city);
  return (
    <section>
      <WeatherFilter onSearch={onSearch} />
      {weather !== null && (
        <>
          <WeatherMain weather={weather} />
          <WeatherList weather={weather.data.slice(0, 6)} />
        </>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weatherApp.weather,
});
const mapDispatchToProps = {
  loadWeather,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
