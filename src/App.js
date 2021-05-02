import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.status = {
      todos: [
        {
          id: 1,
          title: "Hello,React!",
          desc: "React始めました",
          done: false
        },
        {
          id: 2,
          title: "Hello,Redux!",
          desc: "Reduxも始めました",
          done: false
        }
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default App