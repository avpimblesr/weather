import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import Zone from "./Zone";
import Region from "./Region";

// FIND BY ZIPCODE: https://api.openweathermap.org/data/2.5/weather?zip=18334,us&units=imperial&appid=adbbb0d12e7381d37f39d8a64bef9ade

const getRequest =
  "https://api.openweathermap.org/data/2.5/weather?zip=10463,us&units=imperial&appid=adbbb0d12e7381d37f39d8a64bef9ade";

const Forecast = () => {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    axios.get(getRequest).then((res) => {
      const response = res.data;
      setForecast({ ...response });
    });
  }, []);

  return (
    <div className="component">
      <h1 className="form-heading">Forecast</h1>
      <Zone />
      <Region forecast={forecast} />
    </div>
  );
};

export default Forecast;
