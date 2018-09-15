import React, { Component } from 'react';
import Aux from "../../hoc/Auxilliary";
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {

  /**
   * Life cycle mmethods
   */
  render() {
    return ( //this.burger // main burger controls
      <Aux>
        <Burger>
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
