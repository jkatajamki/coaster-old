import React from 'react';
import { hot } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import Navigation from './navigation/Navigation';
import Home from '../components/home/Home';
import About from "../components/about/About";
import FilteredAlbumList from './filtered-album-list/FilteredAlbumList';
import Authentication from './authentication/Authentication';
import ErrorBoundary from './ErrorBoundary';
import SignOut from './authentication/SignOut';
import SignInModal from './authentication/SignInModal';

const Root = ({ history }) => (
  <ConnectedRouter history={history} >
    <main>
      <Navigation />
      <ErrorBoundary>
        <SignInModal />
        <Route exact path="/" component={Home} />
        <Route path="/albums" component={FilteredAlbumList} />
        <Route path="/about" component={About} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/signOut" component={SignOut} />
      </ErrorBoundary>
    </main>
  </ConnectedRouter>
);

export default hot(module)(Root);
