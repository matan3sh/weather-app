import React, { useState } from 'react';

const WeatherFilter = ({ onSearch }) => {
  const [txt, setTxt] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(txt);
  };

  return (
    <form className='filter' onSubmit={onSubmit}>
      <input
        type='text'
        name='txt'
        placeholder='Search City...'
        onChange={(e) => setTxt(e.target.value)}
      />
      <i className='fas fa-search' style={{ color: '#ccc' }}></i>
    </form>
  );
};

export default WeatherFilter;
