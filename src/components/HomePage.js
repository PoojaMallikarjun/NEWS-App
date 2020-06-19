import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, Navbar, Row } from "reactstrap";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar dark>
          <div className="container">
            <Nav>
              <Row>
                <NavItem>
                  <NavLink className="nav-link" to="/topheadlines">
                    HeadLines
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/business">
                    Business
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
                  <NavLink className="nav-link" to="/weather">
                    Weather
                  </NavLink>
                </NavItem>
              </Row>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default HomePage;
