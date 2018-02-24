import React from 'react';
import ReactDom from 'react-dom';

const Root = () => (<div>Hello world t: react</div>);

ReactDom.render(<Root />, document.querySelector('#root'));
