import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import "./Layout.css";
import { getWeather } from "../../actions/weatherActions";
import { getCities } from "../../actions/cityActions";
import Widget from "./Widget";
import "../../weather-icons/css/weather-icons.min.css";

class Landing extends Component {
  componentDidMount() {
    this.props.getCities();
    let { cities } = this.props.city;
    this.props.getWeather(cities);
  }

  render() {
    const { weather, loading } = this.props.weather;
    if (!weather.length | loading) {
      return (
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4g ">
          <Spinner />
        </div>
      );
    } else {
      return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Weather</h1>
          </div>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {weather.map(city => (
                  <Widget city={city} key={city.id} />
                ))}
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
}
Landing.propTypes = {
  getCities: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city,
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { getCities, getWeather }
)(Landing);
