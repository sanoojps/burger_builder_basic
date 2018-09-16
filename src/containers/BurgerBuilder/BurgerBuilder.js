import React, { Component } from 'react';
//import Aux from "../../hoc/Auxilliary";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

class Ingredients {
  constructor(salad=0,bacon=0,cheese=0,meat=0) {
    this.salad = salad;
    this.bacon = bacon;
    this.cheese = cheese;
    this.meat = meat;
  }
}

const INGREDIENT_PRICES = Object.freeze({
  salad: 0.5,
  cheese: 0.5,
  meat: 0.5,
  bacon: 0.5
});
export default class BurgerBuilder extends Component {


  // constructor(props) {
  //   super(props);
  //   this.setState({...});
  // }

/**
 * state
 */
  state = {
    /**
   * Needs to pass this to Burger
   */
    ingredients: new Ingredients(
      0, //salad
      0, //bacon
      0, //cheese
      0 // meat
      ),

      totalPrice: 4,

  }
  

  /**
   * Adding Ingredients Button handlers
   *
   */
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      //make a copy
      ...this.state.ingredients
    };
    //update
    updatedIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.oldCount;
    const newPrice = oldPrice + priceAddition;

    this.setState(
      {
        totaPrice: newPrice,
        ingredients: updatedIngredients
      }
    );
  };

   /**
   * Remove Ingredients Button handlers
   *
   */
removeIngredientHandler = (type) => {
  const oldCount = this.state.ingredients[type];
  if (oldCount <= 0) {
    return;
  }
    const updateCount = oldCount - 1;
    const updatedIngredients = {
      //make a copy
      ...this.state.ingredients
    };
    //update
    updatedIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.oldCount;
    const newPrice = oldPrice - priceAddition;

    this.setState(
      {
        totaPrice: newPrice,
        ingredients: updatedIngredients
      }
    );
  };


  /**
   * Life cycle mmethods
   */
  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo)
    {
      console.log(key);
      disabledInfo[key] = disabledInfo[key] <= 0
    }
  
    return ( //this.burger // main burger controls
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}>
        </Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        ></BuildControls>
      </React.Fragment>
    );
  };

  /**
   * Added a property to hold  some JSX
   */
  burger = 
  (
          <React.Fragment>
              <div>Burger</div>
              <div>Build Controls</div>
          </React.Fragment>
  ); 
}
