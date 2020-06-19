import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Health extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    let country = "in";
    let url = `http://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${process.env.REACT_APP_API_KEY}`;
    let res = await axios.get(url);
    let data = await res.data.articles;

    this.setState({
      data,
    });
  }

  render() {
    return (
      <div>
        <h1>Health</h1>
        <Link to="/home">Home</Link>

        {this.state.data.map((item, index) => (
          <div key={index}>
            <li>
              {item.title}
              {item.author}
            </li>
          </div>
        ))}
      </div>
    );
  }
}
export default Health;
