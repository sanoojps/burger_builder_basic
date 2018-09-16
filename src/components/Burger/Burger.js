import React from "react";

import classes from './Burger.css';
import BurgerIngredients from 
'./BurgerIngredients/BurgerIngredients';


const burger = (props) => {

    /**
     * Transform object to array
     */
    let transformedIngredients = 
    transformIngredients(props).map(
        (key) => {
            /**
             * array count check
             */
            console.log(props.ingredients[key]);
            if (props.ingredients[key] < 0) {
                return []
            }
            return [...Array(props.ingredients[key])].map(
                (_, i) => {
                   return ( 
                   <BurgerIngredients
                        key={key + i}
                        type={key}
                    >
                    </BurgerIngredients>
                   )
                } // map clousre
            ) //map;
        } //map closure
        //map
    ).reduce(
        (array,element) => {
            return array.concat(element);
        },[]
    ); // reduce

    if (transformedIngredients.length === 0) {
        transformedIngredients = 
        (
            <p>
                Please start adding ingredients
            </p>
        )
    }    

    return (
        <div className={classes.Burger}>
            <BurgerIngredients
                type={BurgerIngredients.IngredientType.BreadTop}>
            </BurgerIngredients>

            {/* <BurgerIngredients
                type="cheese">
            </BurgerIngredients>

            <BurgerIngredients
                type="meat">
            </BurgerIngredients> */}

            {transformedIngredients}

            <BurgerIngredients
                type={BurgerIngredients.IngredientType.BreadBottom}>
            </BurgerIngredients>
        </div>

    );

};

const transformIngredients = (props) => {
    return Object.keys(
        props.ingredients
    );
};

export default burger