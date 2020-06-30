import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  headlinesCard = ({ item }) => (
    <div className="container mt-2">
      <CardGroup>
        <Card body outline color="secondary">
          {/* <CardTitle><strong>{item.title}</strong></CardTitle> */}
          <CardHeader><strong>{item.title}</strong></CardHeader>
          {/* <CardImg top width="100%" src={item.urlToImage}></CardImg> */}
          <CardBody>
            <CardSubtitle><strong>{item.author}</strong></CardSubtitle>
            {/* <CardText>{item.content}</CardText> */}
            <br></br>
            <Button color="dark"><a href={item.url}>READ MORE</a></Button> 
          </CardBody>
        </Card>
      </CardGroup>
    </div>
);

  render() {
    return (
      <div>
        {/* <Link to="/business">Business</Link> <br />
        <Link to="/entertainment">entertainment</Link> <br />
        <Link to="/health">health</Link> <br />
        <Link to="/science">science</Link> <br />
        <Link to="/sports">sports</Link> <br /> */}
        <h1 className="case">Today's Headlines</h1><hr />
        <Row>
         
          {this.state.data.map((item, index) => (
            <div key={index} className="col-12 col-md-5 m-auto">
              {/* <li>
                {item.title}
                {item.author}
              </li> */}
              <div >
                <this.headlinesCard item={item} />
              </div>
            </div>
          ))}
        
        </Row>

      </div>
    );
  }
}

export default Home;
