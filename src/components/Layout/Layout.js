import React from "react";
//import Aux from "../../hoc/Auxilliary"
import classes from  "../Layout/Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <React.Fragment>
  <Toolbar></Toolbar>
    <div>SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
  </React.Fragment>
);

export default layout;