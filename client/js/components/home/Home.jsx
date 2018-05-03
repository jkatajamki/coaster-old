import React from 'react';
import {
  Jumbotron, Button
} from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <div className="container text-center">
          <h1 className="jumbotron-heading">Jumbotron heading text</h1>
          <p className="lead text-muted">
            Schlitz neutra brooklyn sustainable pabst bicycle rights viral everyday carry normcore forage poutine. Tumblr yuccie church-key banh mi, keffiyeh authentic venmo banjo woke flannel butcher selfies live-edge.
          </p>
          <div className="buttons-area">
            <Button color="primary" className="my-2">Snackwave</Button>
            <Button color="secondary" className="my-2">Fingerstache</Button>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
