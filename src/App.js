import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Pages/Home"
import Movies from "./Pages/Movies"
import Notfound from "./Pages/Notfound"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Movies">Movies</Link></li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Movie/:id" component={Movies}/>
        <Route path="*" component={Notfound}/>
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}


