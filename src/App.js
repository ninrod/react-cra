import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: 1, name: 'evelize', age: 39},
      {id: 2, name: 'filipe', age: 38},
      {id: 3, name: 'juliana', age: 4}
    ],
    showPersons: false
  };

  toggleHandler = () => this.setState({showPersons: !this.state.showPersons});

  deleteHander = (index) => {
    const ps = [...this.state.persons];
    ps.splice(index, 1);
    this.setState({persons: ps});
  };

  nameChangedHandler = (event, id) => {
    const i = this.state.persons.findIndex(p => p.id === id);
    const p = {...this.state.persons[i] };
    p.name = event.target.value;
    const ps = [...this.state.persons];
    ps[i] = p;
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
            (p, i) => {
              return (
                <Person
                  key={p.id}
                  age={p.age}
                  name={p.name}
                  click={ () => this.deleteHander(i) }
                  change={ event => this.nameChangedHandler(event, p.id) }
                />
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
