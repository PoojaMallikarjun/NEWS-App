import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler,Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// function refreshPage(){   
//     window.location.reload();
// }

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isNavOpen :false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    // refresh(){
    //     window.location.reload()
    // }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/business">
                                                Business
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/entertainment">
                                                Entertainment
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/health">
                                                Health
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/science">
                                                Science
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/sports">
                                                Sports
                                            </NavLink>
                                        </NavItem>
                                </Nav>
                            </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header; 
