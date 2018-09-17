import React, {Component} from 'react';
import Button from '../../UI/Button/Button';


/**
 * Expected Prop Types
 */
/* eslint-disable */
import PropTypes from 'prop-types';
const propTypes = {
    ingredients: PropTypes.array,
    btnType: PropTypes.string,
    clicked: PropTypes.func,
    price: PropTypes.number
}
/* eslint-enable */


export default class OrderSummary extends Component {
  render() {
    return (
      orderSummary(this.props)
    )
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log(
        '[Order Summary] WillUpdate'
        );
  }
  

}


const orderSummary = (props) => {

    const ingredientSummary = 
        Object.keys(props.ingredients).map(
            key => {
                return (
                    <li key={key}>
                        <span
                            style={{ textTransform: 'capitalize' }}>
                            {key}
                        </span> : {props.ingredients[key]}
                    </li>
                );
            }
        );

    return (
        <React.Fragment>
            <h3>Your Order</h3>
           
            <p>
                A delicious burger with 
                the folowing ingredients:
            </p>
           
            <ul>
                {ingredientSummary}
            </ul>
            
            <p>
                <strong>
                Total Price: {props.price.toFixed(2)}
                </strong> 

            </p>

            <p>
                Continue To checkout?
            </p>

            <Button
            btnType="Danger"
            clicked={props.purchasedCancelled}
            >
                CANCEL
            </Button>
        
            <Button
            btnType="Success"
            clicked={props.purchaseContinued}
            >
                CONTINUE
            </Button>

        </React.Fragment>
    )

}
