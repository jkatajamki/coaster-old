import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import Navigation from './navigation/Navigation';
import Home from '../components/home/Home';
import Albums from '../components/albums/Albums';
import About from "../components/about/About";

const Root = ({ history }) => {
  return (
    <div>
      <Navigation />
      <ConnectedRouter history={history} >
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/albums" component={Albums} />
          <Route path="/about" component={About} />
        </div>
      </ConnectedRouter>
    </div>
  );
};

export default Root;
