import React from "react";
import Layout from "./containers/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './containers/Checkout/Checkout'
import Account from "./containers/Account/Account";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Shopping} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/account" component={Account} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
