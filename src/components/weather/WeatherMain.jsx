import React from 'react';
import { connect } from 'react-redux';
import { loadWeather } from '../../store/actions';
import Moment from 'react-moment';

const WeatherMain = ({ weather }) => {
  return (
    <div className='wrapper'>
      <div className='wrapper-header'>
        <p>Tody</p>
        <p>
          <Moment format='LL'>{Date.now()}</Moment>
        </p>
      </div>
      <div className='wrapper-body'>
        <img
          src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`}
          alt=''
        />
        <div className='weather-specs'>
          <p>
            <span className='weather-specs-current'>
              {weather.data[0].temp.toFixed(0)}
            </span>{' '}
            <span className='weather-specs-avg'>
              /{weather.data[0].max_temp.toFixed(0)} °C
            </span>
          </p>
          <p>{weather.data[0].weather.description}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weatherApp.weather
});
const mapDispatchToProps = {
  loadWeather
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherMain);
