import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect = (id) => {
    this.setState({selectedDish: id});
  }
  render() {
    return (
      
      <React.Fragment>
        <Header/>
        <Menu
          dishes={this.state.dishes}
          onDishSelect={(id) => {
          this.onDishSelect(id)
        }}/>
        <DishDetail
          selectedDish={this
          .state
          .dishes
          .filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer/>
        </React.Fragment>

    );
  }
}
export default Main;