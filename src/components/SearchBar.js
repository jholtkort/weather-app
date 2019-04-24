import React, { Component } from "react";

class SearchBar extends Component {
  state = { location: "" };

  onLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.location);
  };

  render() {
    return (
      <div className="mt-5">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">
              <h3>Enter your zip code to get weather for your area:</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="12345"
              value={this.state.location}
              onChange={this.onLocationChange}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
