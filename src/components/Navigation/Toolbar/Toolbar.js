import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigatioItems';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems>

                </NavigationItems>
            </nav>
        </header>
    ) ;
}

export default toolbar;