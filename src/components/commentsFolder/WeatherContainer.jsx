import React, { useState } from 'react'

const api = {
            key: "106e2cdb6024dd9c810a6b6468a47f57",
            base: "https://api.openweathermap.org/data/2.5/"
        }
function WeatherContainer ()  {
        const [query, setQuery] = useState(' ');
        const [weather, setWeather] = useState({});

        const search = (event) => {
            if (event.key === "Enter") {
                fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
                    .then(res => res.json())
                    .then(result => {
                        setWeather(result)
                        setQuery(' ')
                        console.log(result);
                        
                    })
            }
        }

        const dateBuilder = (d) => {
            let months = ["January", "February", "March", "April", 
                                "May", "June", "July", "August", "September",
                                "October", "November", "December"]
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                              "Thursday", "Friday", "Saturday"];
            let day = days[d.getDay()]
            let date = d.getDate()
            let month = months[d.getMonth()]
            let year = d.getFullYear()
            return `${day} ${date} ${month} ${year}`
        }
        
        return (
            <div className="z-depth-3">
               
                <div className={(typeof weather.main != "undefined") ? ((weather.main.temp < 40) ? 'App warm' : 'App') : 'App'}>
                    <main>
                        <div className="search-box"> 
                            <span> Search Your City </span>
                        <input 
                            type="text"
                            className="search-bar"
                            placeholder="Search..."
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                            onKeyPress={search}
                        />
                        </div>
                        {(typeof weather.main != "undefined") ? (
                        <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                            {Math.round(weather.main.temp)}°F
                            </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                        </div>
                        ) : ('')}
                    </main>
                </div>
            </div>
        )
    
}

export default WeatherContainer



