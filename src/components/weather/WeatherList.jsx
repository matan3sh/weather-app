import React from 'react';
import WeatherPreview from './WeatherPreview';

const WeatherList = ({ weather }) => {
  return (
    <div className='weekly-wrapper'>
      {weather.map((day, index) => (
        <WeatherPreview key={index} day={day} flag={index + 1} />
      ))}
    </div>
  );
};

export default WeatherList;
