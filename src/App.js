import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'evelize', age: 39},
      {name: 'filipe', age: 38},
      {name: 'juliana', age: 4}
    ],
    showPersons: false
  };

  toggleHandler = () => this.setState({showPersons: !this.state.showPersons});

  deleteHander = (index) => {
    const ps = [...this.state.persons];
    ps.splice(index, 1);
    this.setState({persons: ps});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(
            p => {
              return (
                <Person age={p.age} name={p.name} click={this.deleteHander}/>
              );
            }
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>hi, I'm a react app</h1>
        <button style={style} onClick={this.toggleHandler}>toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
