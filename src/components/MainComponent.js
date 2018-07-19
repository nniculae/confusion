import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';

import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders'



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    };
  }

  render() {

    const HomePage = ()=>{
      
      return ( <Home />);
    };

    return (

      <React.Fragment>
        <Header/>
          <Switch>
            <Route path='/home' component={HomePage}  />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route path='/contactus' component={Contact} />
            <Redirect to='/home' />
          </Switch>
        <Footer/>
      </React.Fragment>

    );
  }
}
export default Main;