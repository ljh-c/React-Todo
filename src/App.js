import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './styles.css';

const exampleTasks = [
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
      tasks: exampleTasks
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
        }],

        newTask: ''
      })

      // * * * Below is setState with a second argument
      // which updates localStorage after state is updated.
      // Now that localStorage is only updated on page refresh/leave,
      // the second argument is no longer needed (as above).

      // this.setState({ tasks: [...this.state.tasks, 
      //   {
      //     task: this.state.newTask,
      //     id: Date.now(),
      //     completed: false
      //   }],

      //   newTask: ''
      // }, this.updateStorageWithState)
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

    this.handleClick = () => {
      this.setState({ 
        tasks: this.state.tasks.filter(todo => !todo.completed) 
      });
    };

    this.clearAllTasks = () => {
      this.setState({
        tasks: []
      });
    }

    this.updateStorageWithState = () => {
      if (this.state.tasks.length === 0) {
        // if there are no tasks, list will update with example tasks
        localStorage.setItem('user_tasks', JSON.stringify(exampleTasks));
      } else {
        localStorage.setItem('user_tasks', JSON.stringify(this.state.tasks));
      }
    }

    this.updateStateWithStorage = () => {
      this.setState({
        tasks: JSON.parse(localStorage.getItem('user_tasks'))
      });
    }

    this.handleLeavePage = (event) => {
      event.preventDefault();
      this.updateStorageWithState();
    }
  }

  componentDidMount() {
    // update state with previously saved tasks on initial load
    this.updateStateWithStorage();

    // save tasks to storage on page refresh or leave
    window.addEventListener('beforeunload', this.handleLeavePage);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleLeavePage);
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
          clearAllTasks={this.clearAllTasks}
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