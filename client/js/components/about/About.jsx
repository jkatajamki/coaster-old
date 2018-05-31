import React from 'react';
import { Button } from 'reactstrap';

const About = () => (
  <div id="aboutPage">
    <div className="container">

      <div className="row">
        <div className="col-md-4 offset-sm-4">
          <div className="main-center content-section text-center">
            <h1>About coaster</h1>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 offset-sm-4">
          <p>
            This website uses code in order to render things on your screen.
            Please click the button here if you accept our code policy.
            If you do not accept our code policy, we regret to inform you that
            you'll be hard-pressed to find a website that adheres to your standards.
          </p>
          <div className="buttons-area text-right">
            <Button
              outline
              color="secondary"
              className="my-2 px-3"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
