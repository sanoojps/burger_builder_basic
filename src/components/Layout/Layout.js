import React , {Component} from "react";
//import Aux from "../../hoc/Auxilliary"
import classes from  "../Layout/Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

    render() {
      return (
        <React.Fragment>
          <Toolbar 
          drawerToggleClicked={
            this.sideDrawerToggleHandler
          }
          />
          <SideDrawer 
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
           />
          <main
            className={classes.Content}>
            {this.props.children}
          </main>
        </React.Fragment>
      )
    }

    state = {
      showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
      this.setState(
        {
          showSideDrawer: false
        }
      )
    }

    sideDrawerToggleHandler = () => {
      /**
       * to use state inside set state use 
       * function so that you get prevState as well
       */
      this.setState(
        (prevState) => {
          return {
            showSideDrawer: !prevState.showSideDrawer
          }
        }
        
      )
    }

}

export default Layout;