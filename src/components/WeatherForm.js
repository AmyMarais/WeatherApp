//component that will handle the logic to fetch data from api and display it
import React from "react";
//import styling
import "./WeatherForm.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ReactWeather, { useOpenWeather } from "react-open-weather";

//using a functional component
function WeatherForm() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "ced3d2c00049bfdbfbc0c8e10b8ead2d",
    lat: "-33.9055773",
    lon: "18.6989226",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  //-33.9055773 - latitude
  //18.6989226 - longtitude

  const customStyles = {
    fontFamily: "Helvetica, sans-serif",
    gradientStart: "#0181C2",
    gradientMid: "#04A7F9",
    gradientEnd: "#4BC4F7",
    locationFontColor: "#FFF",
    todayTempFontColor: "#FFF",
    todayDateFontColor: "#B5DEF4",
    todayRangeFontColor: "#B5DEF4",
    todayDescFontColor: "#B5DEF4",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#FFF",
    forecastBackgroundColor: "#FFF",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
  };

  return (
    <div>
      <Box className="container">
        <h1> Weather App </h1>
        <Paper elevation={10} style={{ width: "400px", margin: "0 auto" }}>
          <ReactWeather
            theme={customStyles}
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Cape Town"
            unitsLabels={{ temperature: "°C", windSpeed: "km/h" }}
            showForecast
          />
        </Paper>
        <footer> Created By Amy Marais </footer>
      </Box>
    </div>
  );
}

export default WeatherForm;
