import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'
import ErrorScreen from './components/ErrorScreen'

function App() {

  //Para guardar una location
  const [location, setLocation] = useState()
  //Para guardar la información del input y hacer la petición cuando se hace submit
  const [searchInput, setSearchInput] = useState('')
  //Para guardar las sugerencias de la API
  const [suggeredList, setSuggeredList] = useState()
  //Para indicar si hay error o no
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput) {
      id = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }

  const handleChange = event => {
    if (event.target.value === '') {
      setSuggeredList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

      axios.get(URL)
        .then(res => setSuggeredList(res.data.results))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="App">
      <div className='title' >
        <h1 className='border'>Rick and Morty</h1>
        <h1 className='wave' >Rick and Morty</h1>
      </div>

      <div className='container_all'>
        <div className='container_img'>
          <input type="radio" id='1' name='img_slide' hidden />
          <input type="radio" id='2' name='img_slide' hidden />
          <input type="radio" id='3' name='img_slide' hidden />
          <input type="radio" id='4' name='img_slide' hidden />
          <input type="radio" id='5' name='img_slide' hidden />
          <input type="radio" id='6' name='img_slide' hidden />
          <input type="radio" id='7' name='img_slide' hidden />
          <input type="radio" id='8' name='img_slide' hidden />
          <input type="radio" id='9' name='img_slide' hidden />
          <input type="radio" id='10' name='img_slide' hidden />
          <input type="radio" id='11' name='img_slide' hidden />
          <input type="radio" id='12' name='img_slide' hidden />
          <input type="radio" id='13' name='img_slide' hidden />

          <div className='slide'>

            <div className='item_slide'>
              <img src="/img/1.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/2.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/3.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/4.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/5.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/6.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/7.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/8.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/9.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/10.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/11.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/12.jpg" />
            </div>

            <div className='item_slide'>
              <img src="/img/13.jpg" />
            </div>

          </div>

          <div className='pagination'>

            <label className='pagination_item' htmlFor="1">
              <img src="/img/1.jpg" />
            </label>

            <label className='pagination_item' htmlFor="2">
              <img src="/img/2.jpg" />
            </label>

            <label className='pagination_item' htmlFor="3">
              <img src="/img/3.jpg" />
            </label>

            <label className='pagination_item' htmlFor="4">
              <img src="/img/4.jpg" />
            </label>

            <label className='pagination_item' htmlFor="5">
              <img src="/img/5.jpg" />
            </label>

            <label className='pagination_item' htmlFor="6">
              <img src="/img/6.jpg" />
            </label>

            <label className='pagination_item' htmlFor="7">
              <img src="/img/7.jpg" />
            </label>

            <label className='pagination_item' htmlFor="8">
              <img src="/img/8.jpg" />
            </label>

            <label className='pagination_item' htmlFor="9">
              <img src="/img/9.jpg" />
            </label>

            <label className='pagination_item' htmlFor="10">
              <img src="/img/10.jpg" />
            </label>

            <label className='pagination_item' htmlFor="11">
              <img src="/img/11.jpg" />
            </label>

            <label className='pagination_item' htmlFor="12">
              <img src="/img/12.jpg" />
            </label>

            <label className='pagination_item' htmlFor="13">
              <img src="/img/13.jpg" />
            </label>

          </div>
        </div>

      </div>

      <form className='form_container' onSubmit={handleSubmit}>
        <input
          spellCheck='false'
          id='idLocation'
          placeholder='Enter another number from 1 to 126'
          type="text"
          onChange={handleChange}
        />
        <img className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVFJREFUSEvVleExBEEQRt9FQAoiQATIgAgQASJABIgAESACZEAEyIAIqKd6qub2Zmen7N4P/eu2dqdf99dfz81YcsyWnJ8+wCpwBOwCG1HEC3APXAGfrYWVAAfABSCkFCY/AW5aIF2Aya/j4ANwCTzF8zZwBmzF8150VOXkACt+i8oPKxUKOQ2Z1obkygHpoJWrfS3syk7Oo6veb3OAQ1wHdjJZ+g4q1yPgmc1aJTngOz5stW7T92MBXxW3/db7V4mc0R3wDChX0wzSkF0mLdgyZPdBKzcBtOk7sBLO0CGlSIV8xJZXt7o70NS6ibWiyZTBUAr9nyQZtGh3Bqlat9m27aQUDtb3wrSpv2/7NKpddsexcO6G8RpXgwmVJe2N77yX3P6FaPV86Wx+b/VCxgBS0v2MvtDJWMAgZApAFzJ3E08FSBCtPfdHNCWg6NT/D/gBeOVFGZeTouUAAAAASUVORK5CYII="/>
        <button className='form_button'>
          <span className='shadow'></span>
          <span className='edge'></span>
          <span className='front' >
            Search
          </span>
        </button>
        <FilterList
          suggeredList={suggeredList}
          setSearchInput={setSearchInput}
        />
      </form>
      {
        hasError ?
          <ErrorScreen />
          :
          <>
            <LocationInfo location={location} />
            <div className='card__container' >
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
