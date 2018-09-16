import React, { Component } from 'react';
import Aux from "../../hoc/Auxilliary";
import Burger from '../../components/Burger/Burger';

class Ingredients {
  constructor(salad=0,bacon=0,cheese=0,meat=0) {
    this.salad = salad;
    this.bacon = bacon;
    this.cheese = cheese;
    this.meat = meat;
  }
}

export default class BurgerBuilder extends Component {


  // constructor(props) {
  //   super(props);
  //   this.setState({...});
  // }

  /**
   * Needs to pass this to Burger
   */
  state = {
    ingredients: new Ingredients(
      1, //salad
      1, //bacon
      1, //cheese
      1 // meat
      ),
  }
  

/**
 * state
 */


  /**
   * Life cycle mmethods
   */
  render() {
    return ( //this.burger // main burger controls
      <Aux>
        <Burger ingredients={this.state.ingredients}>
          <div> Build Controls </div>
        </Burger>
      </Aux>
    );
  };

  /**
   * Added a property to hold  some JSX
   */
  burger = 
  (
          <Aux>
              <div>Burger</div>
              <div>Build Controls</div>
          </Aux>
  ); 
}
