import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
function SearchBox({updateInfo}) {
  let [city, setCity] = useState("")
  let [error, setError] = useState(false)
  const API_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "404a6a4f7ac9388a179bdec5a21f72e5"

  let getWeatherInfo = async () =>{
    try{
  let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
  let jsonResponse = await response.json();
  // console.log(jsonResponse)
  let result ={
    city : city,
    tepm :jsonResponse.main.temp,
    tempMin : jsonResponse.main.temp_min,
    tempMax : jsonResponse.main.temp_max,
    humidity : jsonResponse.main.humidity,
    feelsLike : jsonResponse.main.feels_like,
    weather : jsonResponse.weather[0].description,

  }
  console.log(result)
  return result;
  }catch(err){
    throw err;
  }
} 
  let handleChange = (evt) =>{
    setCity(evt.target.value)
  }

  let handleSubmit = async(evt) =>{
    try{

      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo)
    }catch(err){
      setError(true)
    }

  }


  return (
    <div className='SearchBox'>
      {/* <h3>Search for the Waether</h3> */}
      <form  onSubmit={handleSubmit}>
       <div className="serchBox">

      <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
       </div>
    <br /><br />
      <Button variant="contained" type='submit'>
       Search
      </Button>
      {error && <h4 style={{color:"red"}}>No Such Place Exist!</h4>}
      </form>
    </div>
  )
}

export default SearchBox