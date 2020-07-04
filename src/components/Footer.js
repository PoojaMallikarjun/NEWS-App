import React from 'react';

function Footer(props){

    return(
        <div className="footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-8" >
                        <h4 style={{color:"white"}}>Contributers:</h4>
                        <ul className="list-unstyled">
                            <li className="fs"><span className="fa fa-github"></span><a href="https://github.com/nithishravindra"> Nithish R</a></li>
                            <li className="fs"><span className="fa fa-github"></span><a href="https://github.com/PoojaMallikarjun"> Pooja M</a></li>
                            <li className="fs"><span className="fa fa-github"></span><a href="https://github.com/RakshithaRavi22"> Rakshitha R</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;