import React, { Component } from 'react'
import classes from "./Modal.css";
import Backdrop from '../Backdrop/Backdrop'

/**
 * Expected Prop Types
 */
/* eslint-disable */
import PropTypes from 'prop-types';
const propTypes = {
    show: PropTypes.bool.isRequired,
    modalClosed: PropTypes.func.isRequired
}
/* eslint-enable */

const modal = (props) => {

    console.log(props);

    return (

        <React.Fragment>
            <Backdrop
                show={props.show}
                clicked={props.modalClosed}
            >
            </Backdrop>
            <div
                className={classes.Modal}
                style={
                    {
                        transform: props.show ?
                            'translateY(0)' :
                            'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }
                }
            >
                {props.children}
            </div>

        </React.Fragment>

       
    )
}

export default class Modal extends Component {
  render() {
    return (
     modal(this.props)
    )
  }

  componentWillUpdate(nextProps, nextState) {
      console.log(
        '[Modal] componentWillUpdate'
      );
  }

  shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.show !== this.props.show) {
          return true
      } 

      return false;
  }
  

}

/**
 * Prop type validation
 */
Modal.propTypes = propTypes;

