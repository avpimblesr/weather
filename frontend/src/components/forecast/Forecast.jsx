import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import Zone from "./Zone";
import Region from "./Region";

// FIND BY ZIPCODE: https://api.openweathermap.org/data/2.5/weather?zip=18334,us&units=imperial&appid=adbbb0d12e7381d37f39d8a64bef9ade
const data = {
  region: "",
  weatherCondition: "",
  sunrise: 0,
  sunset: 0,
  temp: 0,
  feelsLike: 0,
  min: 0,
  max: 0.0,
  humidity: 0,
};

const getRequest =
  "https://api.openweathermap.org/data/2.5/weather?zip=18334,us&units=imperial&appid=adbbb0d12e7381d37f39d8a64bef9ade";

const Forecast = () => {
  const [forecast, setForecast] = useState(data);

  axios.get(getRequest).then((res) => {
    const data = res.data;
    setForecast({ data });
  });

  console.log(forecast)
  
  return (
    <Container className="component">
      <h1 className="form-heading">Forecast</h1>
      <Zone />
      <Region />
    </Container>
  );
};

export default Forecast;
