import React from 'react';

import './Person.scss';

const person = (props) => {
  return (
    <div className="Person" onClick={props.click}>
      <h1>I'm {props.name}. I'm {props.age} years old</h1>
      <p>{props.children}</p>
      <input onChange={props.change} value={props.name}/>
    </div>
  );
};

export default person;