import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Home extends Component{
  state = {
    data: []
  };

  async componentDidMount() {
    let country = "in";
    let url = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`;
    let res = await axios.get(url);
    let data = await res.data.articles;
    this.setState({
      data,
    });
  }
  render() {
    return (
      <div>
        <Link to="/business">Business</Link> <br />
        <Link to="/entertainment">entertainment</Link> <br />
        <Link to="/health">health</Link> <br />
        <Link to="/science">science</Link> <br />
        <Link to="/sports">sports</Link> <br />
        <h1>Todays Headlines</h1>
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

export default Home;
