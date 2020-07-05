import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWeather } from '../../store/actions';
import WeatherFilter from '../weather/WeatherFilter';
import WeatherMain from '../weather/WeatherMain';
import WeatherList from '../weather/WeatherList';

class Home extends Component {
  onSearch = (city) => {
    this.props.loadWeather(city);
  };

  render() {
    const { weather } = this.props;
    return (
      <section>
        <WeatherFilter onSearch={this.onSearch} />
        {weather !== null && (
          <>
            <WeatherMain weather={weather} />
            <WeatherList weather={weather.data.slice(0, 6)} />
          </>
        )}

        {/* <div className='weekly-wrapper'>
          <div className='weather-card'>
            <h3>MON</h3>
            <p>11:00</p>
            <img
              src='https://www.weatherbit.io/static/img/icons/c02d.png'
              alt=''
            />
            <div className='temp'>20 °C</div>
          </div>
          <div className='weather-card'>
            <h3>MON</h3>

            <p>11:00</p>
            <img
              src='https://www.weatherbit.io/static/img/icons/c02d.png'
              alt=''
            />
            <div className='temp'>20 °C</div>
          </div>
          <div className='weather-card'>
            <h3>MON</h3>

            <p>11:00</p>
            <img
              src='https://www.weatherbit.io/static/img/icons/c02d.png'
              alt=''
            />
            <div className='temp'>20 °C</div>
          </div>
          <div className='weather-card'>
            <h3>MON</h3>

            <p>11:00</p>
            <img
              src='https://www.weatherbit.io/static/img/icons/c02d.png'
              alt=''
            />
            <div className='temp'>20 °C</div>
          </div>
          <div className='weather-card'>
            <h3>MON</h3>

            <p>11:00</p>
            <img
              src='https://www.weatherbit.io/static/img/icons/c02d.png'
              alt=''
            />
            <div className='temp'>20 °C</div>
          </div>
          <div className='weather-card'>
            <h3>MON</h3>

            <p>11:00</p>
            <img
              src='https://www.weatherbit.io/static/img/icons/c02d.png'
              alt=''
            />
            <div className='temp'>20 °C</div>
          </div>
        </div> */}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weatherApp.weather
});
const mapDispatchToProps = {
  loadWeather
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
