import React from 'react';
import classes from './DrawerToggle.css';


/**
 * Expected Prop Types
 */
/* eslint-disable */
import PropTypes from 'prop-types';
const propTypes = {
    clicked: PropTypes.func,
}
/* eslint-enable */

const drawerToggle = (props) => {

    return (
        <div
            className={classes.DrawerToggle}
            onClick={props.clicked}>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>
    )
};


export default drawerToggle;