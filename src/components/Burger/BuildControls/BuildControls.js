import React from 'react';
import BuildControl from "./BuildControl/BuildControl";
import classes from "../BuildControls/BuildControl/BuildControl.css";
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

class BuildControlObj {
    constructor(label,type) {
        this.label = label;
        this.type = type;
    }
}

const controls = 
[
    new BuildControlObj(
        "Salad",BurgerIngredients.IngredientType.Salad
        ),
    new BuildControlObj(
        "Bacon",
        BurgerIngredients.IngredientType.Bacon
        ),
    new BuildControlObj(
        "Cheese",
        BurgerIngredients.IngredientType.Cheese
        ),
    new BuildControlObj(
        "Meat",
        BurgerIngredients.IngredientType.Meat
        ),
]

const buildControls = (props) => {
    console.log("props");
    console.log(props);
    return (
        <div className={classes.BuildControls}>
            {controls.map(
                (control) => {
                    return (
                        <BuildControl
                            added={() => props.ingredientAdded(control.type)}
                            key={control.label}
                            label={control.label}
                            removed={()=> props.ingredientRemoved(control.type)}
                            disabled={props.disabled[control.type]}
                        >
                        </BuildControl>
                    ) // return
                } // map closure
            )}
        </div>
    )
};


export default buildControls;
