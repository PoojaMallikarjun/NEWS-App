import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  Navbar,
  Row,
  Col,
  Collapse,
  NavbarToggler
} from 'reactstrap';

class HomePage extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      isNavOpen : false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" >
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav>
                  <Col>
                    <NavItem>
                        <NavLink className='nav-link' to='/topheadlines'>
                          HeadLines
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className='nav-link' to='/business'>
                          Business
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/entertainment'>
                          Entertainment
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/sports'>
                          Sports
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/technology'>
                          Technology
                        </NavLink>
                    </NavItem>
                   </Col> 
                </Nav>
              </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default HomePage;
// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   Nav,
//   NavItem,
//   Navbar,
//   Row
// } from 'reactstrap';

// class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar dark>
//           <div className='container'>
//             <Nav>
//               <Row>
//                 <NavItem>
//                     <NavLink className='nav-link' to='/topheadlines'>
//                       HeadLines
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink className='nav-link' to='/business'>
//                       Business
//                     </NavLink>
//                 </NavItem>
//               </Row>
//             </Nav>
//           </div>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default HomePage;
