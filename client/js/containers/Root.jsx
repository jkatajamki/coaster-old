import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import Navigation from './navigation/Navigation';
import Home from '../components/home/Home';
import About from "../components/about/About";
import FilteredAlbumList from './filtered-album-list/FilteredAlbumList';
import Authentication from './authentication/Authentication';

const Root = ({ history }) => {
  return (
    <ConnectedRouter history={history} >
      <main>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/albums" component={FilteredAlbumList} />
        <Route path="/about" component={About} />
        <Route path="/authentication" component={Authentication} />
      </main>
    </ConnectedRouter>
  );
};

export default Root;
