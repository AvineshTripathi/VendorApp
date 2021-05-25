import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import { Container } from "@material-ui/core";
import HomePage from './Pages/HomePage';


const renderRoutes = () => (
    <Container maxWidth="xs" style={{ margin: "auto", padding: 0 }}>
        <Switch>
            <Route path="/home" exact component={HomePage} />
        </Switch>
    </Container>
);


function Routes() {
    return renderRoutes({});
  }
  
  export default Routes;