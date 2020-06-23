import React from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class News extends React.Component {
  state = {
    data: [],
    errMess: "",
  };

  componentDidMount() {
    let type = this.props.match.params.type;
    let url = `http://newsapi.org/v2/top-headlines?country=in&category=${type}&apiKey=${process.env.REACT_APP_API_KEY}`;
    axios.get(url).then((result) => {
      if (result.data.articles.length > 1) {
        this.setState({
          data: result.data.articles,
        });
      } else {
        this.setState({
          errMess: "Page not found",
        });
      }
    });
  }

  newsCard = ({ item }) => (
    <Card>
      <CardTitle> {item.title} </CardTitle>
      <CardImg width="100%" src={item.urlToImage}></CardImg>
      <CardBody>
        <CardSubtitle>{item.author}</CardSubtitle>
        <CardText>{item.content}</CardText>
        <Button variant="Dark"><a href={item.url}>READ MORE</a></Button> 
      </CardBody>
    </Card>
  );

  render() {
    let res;
    if (this.state.data.length > 0) {
      console.log(this.state.data);

      res = (
        <div>
        <h1>{this.props.match.params.type}</h1>
        <div className="row">
          {this.state.data.map((item, index) => (
            <div key={index} className="col-12 col-md-5 m-1">
              <div>
                <this.newsCard item={item} />
              </div>
            </div>
          ))}
        </div>
        </div>
      );
    } else {
      res = <h1>{this.state.errMess}</h1>;
    }
    return (
    <div className="container">
      {res}
    </div>);
  }
}

export default News;
