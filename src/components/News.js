import React from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardBody,
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
    pathname: "",
  };

  componentDidMount() {
    let type = this.props.match.params.type;
    let url = `http://newsapi.org/v2/top-headlines?country=in&category=${type}&apiKey=${process.env.REACT_APP_API_KEY}`;
    axios.get(url).then((result) => {
      if (result.data.articles.length > 1) {
        this.setState({
          data: result.data.articles,
          pathname:type,
        });
      } else {
        this.setState({
          errMess: "Page not found",
        });
      }
    });
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ComponentDidUpdate");
    let type = this.props.match.params.type;
    let url = `http://newsapi.org/v2/top-headlines?country=in&category=${type}&apiKey=${process.env.REACT_APP_API_KEY}`;
    if (type !== prevState.pathname) {
      axios.get(url).then((result) => {
        if (result.data.articles.length > 1) {
          this.setState({
            data: result.data.articles,
            pathname: type,
          });
        } else {
          this.setState({
            errMess: "Page not found",
          });
        }
      });
    }
  }
  

  newsCard = ({ item }) => (
      <div className="container mt-4 mb-1">
       <CardGroup>
          <Card body outline color="secondary" className="cards">
            {/* <CardTitle><strong>{item.title}</strong></CardTitle> */}
            <CardHeader><strong>{item.title}</strong></CardHeader>
            <CardImg top width="100%"  style={{ height: '20rem'}} src={item.urlToImage}></CardImg>
            <CardBody>
              <CardSubtitle><strong>{item.author}</strong></CardSubtitle><br />
              {/* <CardText>{item.content}</CardText> */}
              <Button color="dark" className="button"><a href={item.url}>READ MORE</a></Button> 
            </CardBody>
          </Card>
        </CardGroup>
      </div>
  );

  render() {

    // const res = this.state.data.map((item, index) => {
    //   return (
    //    <div className="container-fluid mt-3">
    //       <div classname="col-12 col-md-5 m-1" key={index}>
    //         <CardGroup>
    //         <Card body outline color="secondary">
    //           <CardHeader><strong>{item.title}</strong></CardHeader>
    //           <CardImg className="image" top width="100%"  style={{ height: '20rem'}} src={item.urlToImage}></CardImg>
    //           <CardBody>
    //             <CardSubtitle><strong>{item.author}</strong></CardSubtitle><br />
    //             <Button color="dark"><a href={item.url}>READ MORE</a></Button> 
    //           </CardBody>
    //         </Card></CardGroup>
    //       </div> 
    //   </div>
    //   )
    // });

     let res;
    if (this.state.data.length > 0) {
      console.log(this.state.data);
      res = (
        <div >
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
    }
     else {
      res = <h1>{this.state.errMess}</h1>;
    }

    return (
    <div className="container-fluid ">
      <Row>
        <h1 className="case">{this.props.match.params.type}</h1>
        {res}
        </Row>  
      
    </div>
    );
  }
}

export default News;
