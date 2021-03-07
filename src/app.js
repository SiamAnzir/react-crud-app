import React, {Component} from 'react';
import Todos from './todos';
import AddTodos from "./addTodos";
import './app.css';

class App extends Component {

  state = {
    todos: [
      { title:"React" , description:"Prochur documentation porte hobe" , isEditing:false },
      { title:"Lunch" , description:"Birani khaite hobe" , isEditing:false },
    ]
  }

  addTodo = (newTodos) => {
    let todos = [...this.state.todos,newTodos];
    this.setState({ todos });
  }


  deleteTodo = (deleteButtonId) => {
    let todos = this.state.todos.filter((todo,index) => {
        return index !== deleteButtonId;
    })
    this.setState({todos});
  }

  pressUpdateButton = (updateButtonId) => {
    let todos = this.state.todos;
    todos[updateButtonId].isEditing = true;
    this.setState({ todos });
  }

  updateTodo = (id , title , description) => {
      let todos = this.state.todos;
      todos[id].title = title;
      todos[id].description = description;
      todos[id].isEditing = false;

      this.setState({
        todos
      });
  }

  render() {
    return(
        <div className="container">
          <h1>React Crud Todo App</h1>
          <h4>Todo Lists:</h4>
          <Todos allTodos={this.state.todos} pressUpdateButton={this.pressUpdateButton} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <h4>Add Todo: </h4>
          <AddTodos addTodo={this.addTodo}/>
        </div>
    );
  }
}

export default App;
