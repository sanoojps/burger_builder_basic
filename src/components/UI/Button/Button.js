import React from 'react';
import classes from './Button.css';

/**
 * Expected Prop Types
 */
/* eslint-disable */
import PropTypes from 'prop-types';
const propTypes = {
    btnType: PropTypes.string,
    clicked: PropTypes.func
}
/* eslint-enable */

const button = (props) => {
    return (
        <button
            className={
                [classes.Button,classes[props.btnType]].join(' ')
                }
            onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button; 