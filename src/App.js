import React, { Component } from 'react';

/**
 * Custom imports
 */
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
class App extends Component {
  render() {
    return (
      <div>

        <Layout>
          <p>
            <BurgerBuilder>
    
            </BurgerBuilder>
          </p>
        </Layout>
        

      </div>
    );
  }
}

export default App;
