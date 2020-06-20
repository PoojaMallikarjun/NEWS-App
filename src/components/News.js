import React from "react";
import axios from "axios";

class News extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    let type = this.props.match.params.type;
    let url = `http://newsapi.org/v2/top-headlines?country=in&category=${type}&apiKey=${process.env.REACT_APP_API_KEY}`;
    axios.get(url).then((result) => {
      this.setState({
        data: result.data.articles,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.type}</h1>
        {this.state.data.map((item, index) => (
          <div key={index}>
            <li>
              {item.title}
              --AUTHOR {item.author}
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default News;
