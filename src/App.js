import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();   
    this.state = {
      newTask: '',
      tasks: []
    };

    this.handleChange = event => {
      this.setState({ newTask: event.target.value });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      this.setState({ tasks: [...this.state.tasks, 
        {
          task: this.state.newTask,
          id: Date.now(),
          completed: false
        }
      ] })
      this.setState({ newTask: '' })
    };
  }
  render() {
    return (
      <div>
        <h2>Just To-Do It</h2>
        <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;