import React from 'react';
import classes from './NavigationItems.css';
import NavigatonItem from './NavigationItem/NavigationItem';

const navigatonItems = () => {
    return (
        <ul className={classes.NavigatonItems}>
            <NavigatonItem
                link='/'
                active={true}
            >
                Burger Builder
           </NavigatonItem>

            <NavigatonItem
                link='/'
            >
                Checkout
           </NavigatonItem>
        </ul>
    );
};

export default navigatonItems;