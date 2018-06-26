import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <TodoList />
        </div>,
      </div>
    );
  }
}

export default App;
