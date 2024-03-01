import './CurrentWeather.scss'
import { images } from '../../constains'
import { IoLocationSharp } from 'react-icons/io5'

const CurrentWeather = ({ currentWeather }) => {
  console.log(currentWeather.main)
  const test = '09d'
  return (
    <div className='app__current-wrapper app__flex'>
      {/* top */}
      <div className='app__current-top app__flex'>
        {/* left */}
        <div className='current-top-left'>
          <img src={images[`icon_${test}`]} alt='' />
          <p>Partly Cloudy</p>
        </div>
        {/* right */}
        <div className='current-top-right'>
          <p className='current-location app__flex'>
            <IoLocationSharp />
            <span>Edmonton, CA</span>
          </p>
          <div className='current-temp'>
            <p className='current-temp-number'>
              {parseInt(currentWeather.main.temp)}
            </p>
            <p className='current-temp-symbol'>°C</p>
          </div>
          <p className='current-feels-like'>Feels like: 18°C</p>
        </div>
      </div>

      {/* bot */}
      <div className='app__current-bottom app__flex'>
        <div className='current-max-min app__flex'>
          <div className='current-max app__flex'>
            <img src={images.temp_max} alt='max temperature' />
            <p>25°C</p>
          </div>
          <div className='current-min app__flex'>
            <img src={images.temp_min} alt='min temperature' />
            <p>18°C</p>
          </div>
        </div>
        <p className='current-wind'>
          Wind: 2m/s <span>Humidity: 15%</span>
        </p>
      </div>
    </div>
  )
}

export default CurrentWeather
