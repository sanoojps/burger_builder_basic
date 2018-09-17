import React from 'react';
import classes from './NavigationItem.css';


/**
 * Expected Prop Types
 */
/* eslint-disable */
import PropTypes from 'prop-types';
const propTypes = {
    link: PropTypes.link,
    active: PropTypes.bool
}
/* eslint-enable */

const navigatonItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a href={props.link}
                className={props.active ? classes.active : null}
            >
                {props.children}
            </a>
        </li>
    );
};

export default navigatonItem;