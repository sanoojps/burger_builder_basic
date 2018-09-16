import React from "react";
import Aux from "../../hoc/Auxilliary"
import classes from  "../Layout/Layout.css"

const layout = props => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
  </React.Fragment>
);

export default layout;