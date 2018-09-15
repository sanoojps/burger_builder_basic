import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Aux from "../../hoc/Auxilliary"

export default class BurgerBuilder extends Component {
  static propTypes = {
    prop: PropTypes
  }

  /**
   * Life cycle mmethods
   */
  render() {
    return (
      this.burger // main burger controls
    )
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
