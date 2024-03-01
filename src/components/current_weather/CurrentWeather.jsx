import './CurrentWeather.scss'
import { images } from '../../constains'
import { IoLocationSharp } from 'react-icons/io5'

const CurrentWeather = ({ currentWeather, position }) => {
  return (
    <div className='app__current-wrapper app__flex'>
      {/* top */}
      <div className='app__current-top app__flex'>
        {/* left */}
        <div className='current-top-left'>
          <img
            src={images[`icon_${currentWeather.weather[0].icon}`]}
            alt={currentWeather.weather[0].description}
          />
          <p>{currentWeather.weather[0].description}</p>
        </div>
        {/* right */}
        <div className='current-top-right'>
          <p className='current-location app__flex'>
            <IoLocationSharp />
            <span>{position.label ? position.label : currentWeather.name}</span>
          </p>
          <div className='current-temp'>
            <p className='current-temp-number'>
              {parseInt(currentWeather.main.temp)}
            </p>
            <p className='current-temp-symbol'>°C</p>
          </div>
          <p className='current-feels-like'>
            Feels like: {parseInt(currentWeather.main.feels_like)}°C
          </p>
        </div>
      </div>

      {/* bot */}
      <div className='app__current-bottom app__flex'>
        <div className='current-max-min app__flex'>
          <div className='current-max app__flex'>
            <img src={images.temp_max} alt='max temperature' />
            <p>{parseInt(currentWeather.main.temp_max)}</p>
          </div>
          <div className='current-min app__flex'>
            <img src={images.temp_min} alt='min temperature' />
            <p>{parseInt(currentWeather.main.temp_min)}</p>
          </div>
        </div>
        <p className='current-wind'>
          Cloudiness: {currentWeather.clouds.all}%
          <span>Humidity: {currentWeather.main.humidity}%</span>
          <span>Wind: {currentWeather.wind.speed} m/s</span>
        </p>
      </div>
    </div>
  )
}

export default CurrentWeather
