import React from 'react';
import Moment from 'react-moment';

const WeatherPreview = ({ day, flag }) => {
  const tomorrow = new Date();
  return (
    <div className='weather-card'>
      <h3>
        {' '}
        <Moment format='dddd'>
          {tomorrow.setDate(new Date().getDate() + flag)}
        </Moment>
      </h3>

      <p>{day.weather.description}</p>
      <img
        src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
        alt=''
      />
      <div className='temp'>{day.temp.toFixed(0)} °C</div>
    </div>
  );
};

export default WeatherPreview;
