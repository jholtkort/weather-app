import React, { Component } from "react";

import Error from "./Error";

class SearchBar extends Component {
  state = { location: "", error: false };

  onLocationChange = event => {
    this.setState({ location: event.target.value, error: false });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // console.log(this.state.location);

    if (/\d{5}/.test(this.state.location)) {
      this.props.onFormSubmit(this.state.location);
      // console.log("worked");
    } else {
      // console.log("error");
      this.setState({ error: true });
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div className="mt-5">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="zipCode">
              <h3>Enter your zip code to get weather for your area:</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="zipCode"
              placeholder="12345"
              value={this.state.location}
              onChange={this.onLocationChange}
            />
            <Error
              error={this.state.error}
              message={"Please enter a vaild zip code"}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
