import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoApiUrl, geoApiOptions } from '../../api'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = (inputValue) => {
    return fetch(`${geoApiUrl}/cities?namePrefix=${inputValue}`, geoApiOptions)
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              lat: `${city.latitude}`,
              lon: `${city.longitude}`,
              label: `${city.name},${city.countryCode}`,
            }
          }),
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
