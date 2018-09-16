import React from "react";

import classes from './Burger.css';
import BurgerIngredients from 
'./BurgerIngredients/BurgerIngredients';


const burger = (props) => {

    /**
     * Transform object to array
     */
    const transformedIngredients = 
    transformIngredients(props).map(
        (key) => {
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

    return (
        <div className={classes.Burger}>
            <BurgerIngredients
                type="bread-top">
            </BurgerIngredients>

            {/* <BurgerIngredients
                type="cheese">
            </BurgerIngredients>

            <BurgerIngredients
                type="meat">
            </BurgerIngredients> */}

            {transformedIngredients}

            <BurgerIngredients
                type="bread-bottom">
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