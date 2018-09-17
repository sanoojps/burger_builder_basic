import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigatioItems'; 
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop' 

/**
 * Expected Prop Types
 */
/* eslint-disable */
import PropTypes from 'prop-types';
const propTypes = {
    height: PropTypes.number,
    closed: PropTypes.func,
    open: PropTypes.bool,
}
/* eslint-enable */

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer,classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer,classes.Open]
    }

    return (
        <React.Fragment>
            <Backdrop
            show={props.open}
            clicked={props.closed}
            >

            </Backdrop>

            <div className={attachedClasses.join(' ')}>

                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>

                <nav>
                    <NavigationsItems>

                    </NavigationsItems>
                </nav>

            </div>
        </React.Fragment>

    )
};


export default sideDrawer;