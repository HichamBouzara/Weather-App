import React, { Component } from "react";
import "../../weather-icons/css/weather-icons.min.css";

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city
    };
  }

  render() {
    const c = this.state.city;
    const iconStyle = "wi wi-owm-" + c.weather[0].id;
    const temp = Math.round((c.main.temp - 32) / 1.8);
    return (
      <div className="col-lg-4 col-md-6  ">
        <i className={iconStyle} />
        <h2>{c.name}</h2>
        <p>Temperature: {temp} °C</p>
      </div>
    );
  }
}

export default Widget;
