import React from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardSubtitle,
  Button,Row, CardGroup
} from "reactstrap";

// function refreshPage(){
//   window.location.reload()
// }

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
      <div className="container mt-2">
        <CardGroup>
          <Card body outline color="secondary">
            {/* <CardTitle><strong>{item.title}</strong></CardTitle> */}
            <CardHeader><strong>{item.title}</strong></CardHeader>
            <CardImg top width="100%" src={item.urlToImage}></CardImg>
            <CardBody>
              <CardSubtitle><strong>{item.author}</strong></CardSubtitle>
              <CardText>{item.content}</CardText>
              <Button color="dark"><a href={item.url}>READ MORE</a></Button> 
            </CardBody>
          </Card>
        </CardGroup>
      </div>
  );

  render() {

     let res;
    if (this.state.data.length > 0) {
      console.log(this.state.data);

      res = (
        <div>
        <h1 className="case">{this.props.match.params.type}</h1><hr />
        {/* <><button onClick={refreshPage}></button></> */}
        <Row>
          {this.state.data.map((item, index) => (
            <div key={index} className="col-12 col-md-5 m-auto">
              <div >
                <this.newsCard item={item} />
              </div>
            </div>
          ))}
        </Row>
        </div>
      );
    } else {
      res = <h1>{this.state.errMess}</h1>;
    }
    return (
    <div >
      {res}
    </div>
    );
  }
}

export default News;
