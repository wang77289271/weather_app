import './App.css'
import CurrentWeather from './components/current_weather/CurrentWeather'
import Search from './components/search/Search'
import { weatherApiUrl, weatherApiKey } from './api'
import { useState } from 'react'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const onSearchChange = (searchData) => {
    const geoAndKey = `lat=${searchData.lat}&lon=${searchData.lon}&appid=${weatherApiKey}`
    const currentWeatherUrl = `${weatherApiUrl}/weather?${geoAndKey}`
    const forecastWeatherUrl = `${weatherApiUrl}/forecast?${geoAndKey}`

    // current weather data
    fetch(currentWeatherUrl)
      .then((res) => res.json())
      .then((res) => setCurrentWeather(res))

    // weather forecast data
    fetch(forecastWeatherUrl)
      .then((res) => res.json())
      .then((res) => setForecast(res))
  }

  return (
    <div>
      <Search onSearchChange={onSearchChange} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
    </div>
  )
}

export default App
