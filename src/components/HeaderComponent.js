import React, {Component} from 'react';
import {
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    Navbar,
    NavbarBrand,
    Jumbotron,
    Container
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                src="assets/images/logo.png"
                                height="30"
                                width="41"
                                alt="Ristorante Con Fusion"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <span className="fa fa-info fa-lg"></span>
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span>
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span>
                                        Contact Us
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                    <Container fluid>
                        <div className="row row-header">
                            <div className="col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines amd create a unique fusion
                                    experience. Our lipsmacking creation will tickle you culinary senses.</p>
                            </div>
                        </div>
                    </Container>
                </Jumbotron>
            </React.Fragment>

        );
    }
}

export default Header;