import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div className='mt-6'>
      <h2 className='text-center text-2xl font-semibold'>{weather.name}, {weather.sys.country}</h2>
      <div className='flex items-center justify-center'>
        <img className='w-16 h-16' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        <p className='text-3xl font-bold text-center'>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className='text-center text-gray-400 capitalize'>{weather.weather[0].description}</p>
      <div className='grid grid-cols-2 gap-4 text-center mt-5'>
       <div>
         <p className='text-gray-400'>Humidity</p>
        <p className='font-bold'>{weather.main.humidity}%</p>
       </div>
        <div>
         <p className='text-gray-400'>Wind</p>
        <p className='font-bold'>{weather.wind.speed} m/s</p>
       </div>
        <div>
         <p className='text-gray-400'>Pressure</p>
        <p className='font-bold'>{weather.main.pressure} hPa</p>
       </div>
        <div>
         <p className='text-gray-400'>Feels Like</p>
        <p className='font-bold'>{Math.round(weather.main.feels_like)} °C</p>
       </div>
      </div>
    </div>
  )
}

export default WeatherCard
