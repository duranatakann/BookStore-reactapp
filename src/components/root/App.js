import React from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateBook from "../books/AddOrUpdateBook";
import NotFound from "../common/NotFound";
import Login from "../login/Login";

import './ProjectStyle.css'
function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/book"  component={Dashboard} />
        <Route path="/savebook/:bookId" component={AddOrUpdateBook} />
        <Route path="/savebook" component={AddOrUpdateBook} />
        <Route path="/cart"  component={CartDetail} />
        <Route component={NotFound} />
      </Switch>
     
    </Container>
  );
}

export default App;
