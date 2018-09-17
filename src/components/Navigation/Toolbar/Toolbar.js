import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigatioItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

/**
 * Expected Prop Types
 */
/* eslint-disable */
import PropTypes from 'prop-types';
const propTypes = {
    drawerToggleClicked: PropTypes.func,
}
/* eslint-enable */

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
        <DrawerToggle
        clicked={props.drawerToggleClicked}
        ></DrawerToggle>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems>

                </NavigationItems>
            </nav>
        </header>
    ) ;
}

export default toolbar;