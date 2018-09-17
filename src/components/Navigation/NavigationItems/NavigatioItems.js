import React from 'react';
import classes from './NavigationItems.css';
import NavigatonItem from './NavigationItem/NavigationItem';

const navigatonItems = () => {
    return (
        <ul className={classes.NavigatonItems}>
            <NavigatonItem
                link='/'
                active="active"
            >
                Burger Builder
           </NavigatonItem>
            <NavigatonItem
                link='/'
                active="active"
            >
                Checkout
           </NavigatonItem>
        </ul>
    );
};

export default navigatonItems;