import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getCoordinates = () => {
    let coords = [];
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        coords[0] = position.coords.latitude;
        coords[1] = position.coords.longitude;
      });
      console.log(coords);
      return coords;
    } else return 0;
  };

  async componentDidMount() {
    const coords = this.getCoordinates();
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=46fa076795a1ed368bc5912c486f7168`;
    let res = await axios.get(url);
    let data = await res;
    console.log(data);
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}
export default Weather;
