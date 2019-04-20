import React, { Component } from 'react';
import List from './List';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos:[
      {id: 1, content: 'This is a To-do list application'},
      {id: 2, content:'Type inside the Add new item to add a new todo'},
      {id: 3, content: 'click on the To-dos remove them'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos 
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo] //adding a new to do to already existing todos
    this.setState({
      todos:todos
    })
  }

  render() {
    return (
      <div className="todo-App container">
       <h3 className="center green-text">To-do</h3>
       <List todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
       <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
