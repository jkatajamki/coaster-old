import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import About from './about/About';
import ErrorBoundary from './ErrorBoundary';
import SignOut from './authentication/SignOut';
import SignUpPage from './authentication/SignUp/SignUpPage';
import SignInModal from './authentication/SignIn/SignInModal';
import Alerts from './alerts/Alerts';
import SignInPage from './authentication/SignIn/SignInPage';

const Root = () => (
  <Router>
    <main>
      <Navigation />
      <Alerts />
      <ErrorBoundary>
        <SignInModal />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/signIn" component={SignInPage} />
        <Route path="/signOut" component={SignOut} />
      </ErrorBoundary>
    </main>
  </Router>
)

export default hot(module)(Root);
