import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

/**
 * Expected Prop Types
 */
/* eslint-disable */
import PropTypes from 'prop-types';
const propTypes = {
    height: PropTypes.number,
}
/* eslint-enable */

const logo = (props) => {
    return (
        <div
            className={classes.Logo}
            style={{ height: props.height}}
        >
            <img
                src={burgerLogo}
                alt="burger"
            >
            </img>
        </div>
    )
};

export default logo