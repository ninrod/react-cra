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
    this.setState({
      persons: [
        {name: 'EVELIZE', age: 339},
        {name: 'FILIPE', age: 338},
        {name: 'JULIANA', age: 44}
      ]
    });
  };

  nameHandler = (event) => {
    this.setState({
      persons: [
        {name: 'evelize', age: 39},
        {name: event.target.value, age: 38},
        {name: 'juliana', age: 4}
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>hi, I'm a react app</h1>
        <button style={style} onClick={this.clickHandler}>clica!</button>
        <Person
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}/>
        <Person
          age={this.state.persons[1].age}
          name={this.state.persons[1].name}
          change={this.nameHandler}
        />
        <Person
          age={this.state.persons[2].age}
          name={this.state.persons[2].name}>
          LoL!!!
        </Person>
      </div>
    );
  }
}

export default App;
