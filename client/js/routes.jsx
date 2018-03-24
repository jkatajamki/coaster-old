import React from 'react';
import { Route } from 'react-router';
import Root from './containers/root';
import About from './components/about/about';
import Albums from './components/albums/albums';
import Home from './components/home/home';

export default (
  <Route path="/" component={Root}>
    <Route path="/about" component={About}/>
    <Route path="/albums" component={Albums}/>
  </Route>
);
