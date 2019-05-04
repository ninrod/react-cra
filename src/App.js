import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'evelize', age: 39},
      {name: 'filipe', age: 38},
      {name: 'juliana', age: 4}
    ]
  };

  clickHandler = () => {
    console.log('funfou');
  };

  render() {
    return (
      <div className="App">
        <h1>hi, I'm a react app</h1>
        <button onClick={this.clickHandler}>clica!</button>
        <Person age={this.state.persons[0].age}  name={this.state.persons[0].name}/>
        <Person age={this.state.persons[1].age}  name={this.state.persons[1].name}/>
        <Person age={this.state.persons[2].age}  name={this.state.persons[2].name}>
          LoL!!!
        </Person>
      </div>
    );
  }
}

export default App;
