import './App.scss'
import CurrentWeather from './components/current_weather/CurrentWeather'
import Search from './components/search/Search'
import { weatherApiUrl, weatherApiKey } from './api'
import { useEffect, useState } from 'react'
import Forecast from './components/forecast_weather/Forecast'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [position, setPosition] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      })
    } else {
      console.log('Geolocation is not available in your browser.')
    }
  }, [])

  const onSearchChange = (searchData) => {
    setPosition({
      lat: searchData.lat,
      lon: searchData.lon,
      label: searchData.label,
    })
  }

  useEffect(() => {
    const geoAndKey = `lat=${position?.lat}&lon=${position?.lon}&appid=${weatherApiKey}&units=metric`
    if (position) {
      fetch(`${weatherApiUrl}/weather?${geoAndKey}`)
        .then((res) => res.json())
        .then((res) => setCurrentWeather(res))

      fetch(`${weatherApiUrl}/forecast?${geoAndKey}`)
        .then((res) => res.json())
        .then((res) => setForecast(res))
    } else {
      console.log('Getting location...')
    }
  }, [position])

  return (
    <main className='app app__flex'>
      <div className='app_container app-gradiant'>
        <div className='app__title'>
          <h1 className='header-text'>
            Weather <span>Forecast</span>
          </h1>
        </div>
        <div className='app__search'>
          <Search onSearchChange={onSearchChange} />
        </div>
        <div className='app__content'>
          {position ? (
            currentWeather && (
              <CurrentWeather
                currentWeather={currentWeather}
                position={position}
              />
            )
          ) : (
            <h1>Getting your location weather</h1>
          )}
          {position && forecast && <Forecast forecast={forecast} />}
        </div>
      </div>
    </main>
  )
}

export default App
