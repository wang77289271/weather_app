import './CurrentWeather.scss'
import { images } from '../../constains'

const CurrentWeather = () => {
  const test = '01d'
  return (
    <div>
      <h1>city: Edmonton</h1>
      <p>weather desc: Sunny</p>
      <img src={images[`icon_${test}`]} alt='icon' style={{ width: '50px' }} />
      <p>temp: 18°C</p>
      <p>Feels like: 15°C</p>
      <p>Wind: 2m/s</p>
      <p>Humidity: 15%</p>
      <p>Pressure: 15 hpa</p>
    </div>
  )
}

export default CurrentWeather
