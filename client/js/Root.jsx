import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import About from './about/About';
import ErrorBoundary from './ErrorBoundary';
import SignOut from './authentication/SignOut';
import Authentication from './authentication/Authentication';
import SignInModal from './authentication/SignIn/SignInModal';
import Alerts from './alerts/Alerts';

const Root = () => (
  <Router>
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
  </Router>
)

export default hot(module)(Root);
