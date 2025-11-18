import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_AP_KEY;

  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) =>{
    setLoading(true);
    setError('');
    try{
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

      const response = await axios.get(url);

      console.log(response.data);

      setWeather(response.data);
    }
    catch(error){
      if(error.response && error.response.status === 404){
        setError('City not found. Please try again');
      }else{
        setError('An error occured. Please try again later.')
      }
      setWeather(null);
    } finally{
      setLoading(false);
    }
  }


  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
        <div className="bg-teal-900 rounded-lg p-8 text-white max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-8">Weather App</h1>
          <SearchBar fetchWeather={fetchWeather} />
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {weather && <WeatherCard weather={weather}/>}
        </div>
      </div>
    </>
  );
}

export default App;
