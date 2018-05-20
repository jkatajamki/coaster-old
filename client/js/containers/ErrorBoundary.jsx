import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('componentDidCatch', error, info);
  }

  render() {
    const errorPage = (
      <div id="errorBoundary">
        <div className="container">
          <div className="row justify-content-md-center">

            <div className="col-lg-6">
              <div className="display-error-page main-center content-section">
                <h2>Something unexpected happened...</h2>

                <p>Some error happened, and that's why you're seeing this page. You can try again, or wait till the problem is resolved. Sorry about the inconvenience!</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );

    return this.state.hasError ? errorPage : this.props.children;
  }
}

export default ErrorBoundary;
