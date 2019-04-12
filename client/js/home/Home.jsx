import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => (
  <div id="homePage">
    <Jumbotron>
      <div className="container text-center pt-5 pb-5">
        <h1 className="jumbotron-heading mb-5">This is Coaster.</h1>
        <p className="lead px-3">
          Schlitz neutra brooklyn sustainable pabst bicycle rights viral everyday
          carry normcore forage poutine.
          Tumblr yuccie church-key banh mi, keffiyeh authentic venmo banjo woke
          flannel butcher selfies live-edge.
        </p>
        <div className="buttons-area mt-3">
          <Button outline color="secondary" className="my-2">Snackwave</Button>
          <Button color="secondary" className="my-2">Fingerstache</Button>
        </div>
      </div>
    </Jumbotron>
  </div>
);

export default Home;
