import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect = (id) =>{
    this.setState({selectedDish: id});
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
        <DishDetail  selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Menu  dishes={this.state.dishes}   onDishSelect={(id) =>{ this.onDishSelect(id)} }/>
         
        </div>
      </div>
    );
  }
}
export default Main;