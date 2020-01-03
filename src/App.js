import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const initialTasks = [
  {
    task: 'Buy it',
    id: 1,
    completed: false
  },
  {
    task: 'Use it',
    id: 2,
    completed: false
  },
  {
    task: 'Break it',
    id: 3,
    completed: false
  },
  {
    task: 'Fix it',
    id: 4,
    completed: false
  },
  {
    task: 'Trash it',
    id: 5,
    completed: false
  },
];

class App extends React.Component {
  constructor() {
    super();   
    this.state = {
      newTask: '',
      tasks: initialTasks
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
      ] });
      this.setState({ newTask: '' });
    };

    this.toggleComplete = todoId => {
      this.setState({ 
        tasks: this.state.tasks.map(todo => {
          if (todo.id === todoId) {
            return {...todo, completed: !todo.completed};
          } else return todo;
        })
      });
    };

    this.handleClick = event => {
      this.setState({ 
        tasks: this.state.tasks.filter(todo => !todo.completed) 
      })
    };
  }
  render() {
    return (
      <div>
        <h2>Just To-Do It</h2>
        <TodoForm 
          newTask={this.state.newTask}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        />
        <TodoList 
          tasks={this.state.tasks}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;