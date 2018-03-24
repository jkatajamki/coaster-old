import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import Navigation from '../containers/navigation';
import Home from '../components/home/home';
import Albums from '../components/albums/albums';
import About from "../components/about/about";

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
