import React from 'react';
import { Switch, Route } from 'react-router-dom';
import One from './One';
import Two from './Two';
import Three from './Three';
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={One}/>
      <Route path='/two' component={Two}/>
      <Route path='/three' component={Three}/>
    </Switch>
  </main>
)

export  default Main;