import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Sports extends Component{
    state = {
        data:[]
    }

    async componentDidMount() {
        let url = 'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=87e9b26b27db476fbd16ff7dd3f71677'
        let res = await axios.get(url)
        let data = await res.data.articles

        this.setState({
            data
        });
    }

    render(){
        return(
            <div>
                <h1>Sports</h1>
                <Link to="/home">Home</Link>

                {this.state.data.map((item,index)=>(
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

export default Sports;
