import './Forecast.scss'
import { images } from '../../constains'

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Forecast = ({ forecast }) => {
  const indices = [1, 9, 17, 25, 32]
  const fiveDaysForecase = indices.map((index) =>
    forecast.list.slice(index - 1, index)
  )

  const date = new Date().getDay()
  const forecast_days = weekdays
    .slice(date, weekdays.length)
    .concat(weekdays.slice(0, date))

  console.log(fiveDaysForecase[0])
  return (
    <div className='app__forecast-wrapper app__flex'>
      {fiveDaysForecase.map((forecast, index) => (
        <div
          className='app__forecast-container forecast-gradiant app__flex'
          key={`forecast-${index}`}
        >
          <div className='forecast-days'>
            <h1>{forecast_days[index]}</h1>
            <p>{forecast[0].dt_txt.split(' ')[0]}</p>
          </div>
          <div className='forecast-temp app__flex'>
            <h2>{parseInt(forecast[0].main.temp)}</h2>
            <p>°C</p>
          </div>
          <div className='forecast-weather app__flex'>
            <img
              src={images[`icon_${forecast[0].weather[0].icon}`]}
              alt={forecast[0].weather[0].description}
            />
            <p>{forecast[0].weather[0].description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Forecast
