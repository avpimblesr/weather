import { Fragment } from "react";
import Container from "@material-ui/core/Container";
import { dayDateTime } from "../../utilities/TimeConverter";

import Daily from "./Daily";
import Hourly from "./Hourly";

const Region = ({ forecast }) => {

  return (
    <div className="component" id="forecast">
      <Fragment>
        <section id="region-left">
          <h2 id="region">{forecast.name}</h2>
          <p>{dayDateTime()}</p>
          <br />

          <section id="hi-low">
            <img src="cloud" alt={forecast.weather[0].description} />
            <p>high: {forecast.main.temp_max}&deg;</p>/
            <p>low: {forecast.main.temp_min}&deg;</p>
          </section>

          <section id="temp">
            <p>{forecast.main.temp}&deg;</p>
            <p>RealFeel {forecast.main.feels_like}&deg;</p>
          </section>

          <section id="weather">{forecast.weather[0].description}</section>
        </section>
      </Fragment>
      <section id="daily-hourly">
        <span id="hourly">
          <Hourly />
        </span>

        <span id="daily">
          <Daily />
        </span>
      </section>
    </div>
  );
};

export default Region;
