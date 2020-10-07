import React from 'react';
import {  Route, Switch } from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./redux/configureStore";
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"

import './App.css';


const store =
createStore(
reducers,
applyMiddleware(thunk)
)

function App() {
  return (
    <main>
      <Provider store={store}>
    <Navbar />
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
       
    </Switch>
    </Provider>
</main>
  );
}

export default App;
