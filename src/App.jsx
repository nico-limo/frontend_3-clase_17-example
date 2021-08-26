import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NewGame from './NewGame'
import Character from './Character'
import EndGame from './EndGame'
import NotFound from './NotFound'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NewGame} />
          <Route exact path="/character/:genero" component={Character} />
          <Route exact path="/character/:genero/:clase" component={EndGame} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
