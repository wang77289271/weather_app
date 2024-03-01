import './Forecast.scss'
import { images } from '../../constains'

const Forecast = () => {
  const test = '09d'
  return (
    <div className='app__forecast-container forecast-gradiant app__flex'>
      <h1>Monday</h1>
      <div className='forecast-temp app__flex'>
        <h2>24</h2>
        <p>°C</p>
      </div>
      <div className='forecast-weather app__flex'>
        <img src={images[`icon_${test}`]} alt='' />
        <p>Partly Cloudy</p>
      </div>
    </div>
  )
}

export default Forecast
