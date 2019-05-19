import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import About from './about/About';
import ErrorBoundary from './ErrorBoundary';
import SignOut from './authentication/SignOut';
import Authentication from './authentication/Authentication';
import SignInModal from './authentication/SignIn/SignInModal';
import Alerts from './alerts/Alerts';

const Root = ({ history }) => (
  <ConnectedRouter history={history}>
    <main>
      <Navigation />
      <Alerts />
      <ErrorBoundary>
        <SignInModal />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/signOut" component={SignOut} />
      </ErrorBoundary>
    </main>
  </ConnectedRouter>
)

export default hot(module)(Root);
