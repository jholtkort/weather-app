import React, { Component } from "react";
import openweather from "../components/apis/openweather";

import "./App.css";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { weather: {} };

  onFormSubmit = async zip => {
    const response = await openweather.get("/data/2.5/weather", {
      params: {
        zip: zip
      }
    });

    this.setState({ weather: response });

    console.log(this.state.weather.data);
    console.log(this.state.weather);
  };

  renderWeather = () => {
    const { data } = this.state.weather;

    if (data) {
      const temp = Math.floor((data.main.temp - 273) * (9 / 5) + 32);
      console.log(data.weather[0]);
      console.log(data.weather[0].description);

      return (
        <div className="row mt-5">
          <div className="col-9 justify-content-center text-align-center">
            <h2>Here's the weather for: {data.name}</h2>
            <h2>The temperature is {temp} &deg;F</h2>
            <h2>Currently, there is {data.weather[0].description}</h2>
          </div>
        </div>
      );
    }
  };

  backgroundClass = () => {
    if (!this.state.weather.data) {
      return "";
    } else {
      return this.state.weather.data.weather[0].main.toLowerCase();
    }
  };

  render() {
    return (
      <div className={this.backgroundClass()}>
        <div className="container my-5 py-5 main">
          <h1 className="text-center">Weather App</h1>
          <SearchBar onFormSubmit={this.onFormSubmit} />
          {this.renderWeather()}
        </div>
      </div>
    );
  }
}

export default App;
