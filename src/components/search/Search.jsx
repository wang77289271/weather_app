import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoApiUrl, geoApiOptions } from '../../api'
import './Search.scss'

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

  // Custom styles
  const customStyles = {
    // provide correct types here
    control: (provided, state) => ({
      ...provided,
      borderRadius: '5px',
      border: 'none !important',
      backgroundColor: '#11003f9c',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#11003f9c' : null,
      color: state.isFocused ? 'white' : '#11003f9c',
    }),
  }

  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className='app__search-container'
      styles={customStyles}
    />
  )
}

export default Search
