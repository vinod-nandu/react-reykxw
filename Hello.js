import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default ({ name }) => <h1>Hello {name}!</h1>;
