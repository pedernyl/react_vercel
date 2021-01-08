import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Shop from "./Shop";
import './App.css';

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/shop" component={Shop} />
          </Switch>
      </main>
  );
}

export default App;
