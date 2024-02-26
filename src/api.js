const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions'

const rapidGeoApiKey = import.meta.env.VITE_RAPID_API_GEO_KEY

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': rapidGeoApiKey,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
}

export const geoApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

export const weatherApiUrl = 'https://api.openweathermap.org/data/2.5'

export const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY
