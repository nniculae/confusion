import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Container} from 'reactstrap';

class Header extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                     <Container fluid>
                        <div className="row row-header">
                            <div className="col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines amd create a unique fusion experience. Our lipsmacking creation will tickle you culinary senses.</p>
                            </div>
                        </div>
                        </Container>  
                </Jumbotron>
                </React.Fragment>
            
            );
    }
}
 
export default Header;