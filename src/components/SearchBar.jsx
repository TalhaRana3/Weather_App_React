import React, { useState } from "react";

const SearchBar = ({fetchWeather}) => {
  const [city, setCity] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();
    if (city.trim) {
        fetchWeather(city);
        setCity('');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border border-gray-300 outline-0 flex-1 rounded-l-lg border-r-0 "
        />
        <button className="p-2 bg-blue-500 border cursor-pointer hover:bg-blue-700 border-l-0 rounded-r-lg  ">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
