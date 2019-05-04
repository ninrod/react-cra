import React from 'react';

import './Person.scss';

const person = (props) => {
  return (
    <div className="Person">
      <h1>I'm {props.name}. I'm {props.age} years old</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default person;