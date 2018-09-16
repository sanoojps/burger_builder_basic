import React, { Component } from 'react';
//import Aux from "../../hoc/Auxilliary";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import classes from "../../components/Burger/BuildControls/BuildControls.css";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
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

      purchasable: false,

      purchasing: false

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

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients,
        purchasable: true
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
    this.setState(
      {
        purchasable: false
      }
    )
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
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients
      }
    );
  };

  /**
   * Modal click
   */
  purchaseCancelhandler = () => {
    this.setState(
      {
        purchasing:false
      }
    );
  };

  /**
   * Order Now handlers
   */
  purchaseHandler = () => {
    this.setState(
      {
        purchasing: true
      }
    )
  }

  /**
   * Modal Buttons
   */
  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  /**
   * Life cycle mmethods
   */
  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo)
    {
      //console.log(key);
      disabledInfo[key] = disabledInfo[key] <= 0
    }
  
    return ( //this.burger // main burger controls
      <React.Fragment >
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelhandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchasedCancelled={this.purchaseCancelhandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
            >
          </OrderSummary>
        </Modal>
          
        <Burger ingredients={this.state.ingredients}>
        </Burger>

        <div className={classes.BuildControls}>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            totalPrice={this.state.totalPrice}
            purchaseHandler={this.purchaseHandler}
            purchasable={this.state.purchasable}
          ></BuildControls>
        </div>
        
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
