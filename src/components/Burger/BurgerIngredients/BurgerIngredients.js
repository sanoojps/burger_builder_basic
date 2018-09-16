import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredients.css'

class BurgerIngredients extends Component {

    static IngredientType = Object.freeze(
        {
            BreadBottom: "bread-bottom",
            BreadTop: "bread-top",
            Meat: "meat",
            Cheese: "cheese",
            Salad: "salad",
            Bacon: "bacon",
        }
    );

    render() {

        let ingredient = null;

        switch (this.props.type) {

            case BurgerIngredients.IngredientType.BreadBottom:
                ingredient = <div className={classes.BreadBottom}></div>;
                break;

            case BurgerIngredients.IngredientType.BreadTop:
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}>
                        </div>
                        <div className={classes.Seeds2}>
                        </div>
                    </div>
                )

                break;

            case BurgerIngredients.IngredientType.Meat:
                ingredient = <div className={classes.Meat}></div>;
                break;

            case BurgerIngredients.IngredientType.Cheese:
                ingredient = <div className={classes.Cheese}></div>;
                break;

            case BurgerIngredients.IngredientType.Salad:
                ingredient = <div className={classes.Salad}></div>;
                break;

            case BurgerIngredients.IngredientType.Bacon:
                ingredient = <div className={classes.Bacon}></div>;
                break;

            default:
                ingredient = null
                break;

        }; //switch

        return ingredient

    }; // render
};


/**
 * Prop type validation
 */
BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredients;

