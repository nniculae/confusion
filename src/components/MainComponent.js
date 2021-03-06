import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';


const mapStateToStore = (state)=>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};
class Main extends Component {
  
  render() {

    const HomePage = () => {

      return (<Home
        dish={this
        .props
        .dishes
        .filter((dish) => dish.featured)[0]}
        promotion={this
        .props
        .promotions
        .filter((promotion) => promotion.featured)[0]}
        leader={this
        .props
        .leaders
        .filter((leader) => leader.featured)[0]}/>);
    };

    const DishWithId = ({match}) => {
      return (<DishDetail
        dish={this
        .props
        .dishes
        .filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this
        .props
        .comments
        .filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}/>);
    }

    return (

      <React.Fragment>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
          <Route path='/menu/:dishId' component={DishWithId}/>
          <Route path='/contactus' component={Contact}/>
          <Route path='/about' component={()=> <About leaders={this.props.leaders} />} />
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </React.Fragment>

    );
  }
}
export default withRouter(connect(mapStateToStore)(Main));