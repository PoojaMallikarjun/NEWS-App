import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
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
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`;
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
          <CardHeader className="heading"><strong>{item.title}</strong></CardHeader>
            <CardBody>
            <CardSubtitle><strong>{item.author}</strong></CardSubtitle>
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
