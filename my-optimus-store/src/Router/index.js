import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainStore from "../pages/mainStore";
import ShoppingCart from "../pages/shoppingCart";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainStore} />
      <Route exact path="/cart" component={ShoppingCart} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;