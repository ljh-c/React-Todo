import React from 'react';

class TodoForm extends React.Component { 
  // constructor with state
  constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }

  handleChange = event => {
    this.setState({ newTask: event.target.value });
  }
  
  // class method to submit form
  handleSubmit = event => {
    event.preventDefault();

    this.props.addTodo(this.state.newTask);

    this.setState({newTask: ''});
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Add new task"
          value={this.state.newTask} 
          onChange={this.handleChange} 
        />
        <button type="submit">&#43;</button>
      </form>
      <button onClick={this.props.handleClick}>Clear completed tasks</button>
      <button onClick={this.props.clearAllTasks}>Clear ALL tasks</button>
      </>
    );
  }
}

export default TodoForm;