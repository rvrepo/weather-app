import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun,
  faSun,
  faCloud,
  faMoon,
  faCloudMoon,
  faCloudSunRain,
  faCloudMoonRain,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const api = {
  baseURL: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "700f70f04cf30aa36c37d654a5c98d34",
};

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.baseURL}${location}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setLocation("");
          setWeather(result);
        });
    }
  };

  let currTime = Math.round(new Date().getTime() / 1000);
  let classes = [];

  const getCurrentTime = () => {
    const gmtArray = new Date(currTime * 1000).toGMTString().split(" ");
    const timeArray = gmtArray[4].split(":");
    let midnight = "AM";
    let hrs = timeArray[0];
    if (hrs >= 12) {
      midnight = "PM";
      if (hrs > 13) {
        hrs -= 12;
      }
    }
    return `${hrs} : ${timeArray[1]} ${midnight}`;
  };

  /**
   * This function will return set of classes to apply based on Time, Temperature
   * and Weather Type (example Sunny, Cloudy, Haze).
   */
  const getWeatherType = () => {
    if (typeof weather.sys !== "undefined") {
      currTime = currTime + weather.timezone;

      if (currTime > weather.sys.sunrise && currTime < weather.sys.sunset) {
        classes.push("day");
      } else {
        classes.push("night");
      }
    }
    if (typeof weather.main != "undefined") {
      if (weather.main.temp > 25) {
        classes.push("hot");
      } else {
        classes.push("cold");
      }
      classes.push(weather.weather[0].main.toLowerCase());
    }
    return classes.length > 1 ? classes.join(" ") : "hot";
  };

  const getIcon = () => {
    if (classes.includes("day")) {
      if (classes.includes("clear") && classes.includes("clouds")) {
        return <FontAwesomeIcon icon={faCloudSun} color="#FFF" />;
      } else if (classes.includes("clear")) {
        return <FontAwesomeIcon icon={faSun} color="#FFF" />;
      } else if (classes.includes("clouds")) {
        return <FontAwesomeIcon icon={faCloud} color="#FFF" />;
      } else if (classes.includes("rain")) {
        return <FontAwesomeIcon icon={faCloudSunRain} color="#FFF" />;
      }
    } else {
      if (classes.includes("clouds")) {
        return <FontAwesomeIcon icon={faCloudMoon} color="#FFF" />;
      } else if (classes.includes("rain")) {
        return <FontAwesomeIcon icon={faCloudMoonRain} color="#FFF" />;
      } else {
        return <FontAwesomeIcon icon={faMoon} color="#FFF" />;
      }
    }
  };

  return (
    <div className={`main-wrapper ${getWeatherType()}`}>
      <input
        autoFocus={true}
        className="location-input"
        type="text"
        placeholder="Type location here..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={search}
      ></input>
      {typeof weather.main !== "undefined" ? (
        <div>
          <div className="temperature">
            <strong>{Math.round(weather.main.temp)}</strong>° C
          </div>
          <div className="weather-type">{weather.weather[0].main}</div>
          <div className="icons">{getIcon()}</div>
          <div className="curr-time">{getCurrentTime()}</div>
          <div className="location">
            <strong>
              {weather.name}, {weather.sys.country}
            </strong>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
