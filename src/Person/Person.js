import React from 'react';

const person = (props) => {
  return (
    <div>
      <h1>I'm {props.name}. I'm {props.age} years old</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default person;