import React, { Component } from 'react';

class WeatherFilter extends Component {
  state = { txt: '' };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState(({ txt }) => ({ ...txt, [field]: value }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.txt);
  };

  render() {
    return (
      <form className='filter' onSubmit={this.onSubmit}>
        <input
          type='text'
          name='txt'
          placeholder='Search City...'
          onChange={this.onChange}
        />
        <i className='fas fa-search' style={{ color: '#ccc' }}></i>
      </form>
    );
  }
}

export default WeatherFilter;
