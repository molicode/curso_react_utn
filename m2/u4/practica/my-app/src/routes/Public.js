import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DetallePage from "../pages/DetallePage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import RegistroPage from "../pages/RegistroPage";

function Public() {
  return (
    <Switch>
      <Route path="/registro">
        <RegistroPage />
      </Route>

      <Route path="/producto/:id">
        <DetallePage />
      </Route>

      <Route path="/productos/:id" component={DetallePage} />

      <Redirect path="/home" to="/" />

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default Public;
