import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import SearchForm from './components/SearchForm';
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
  {
    task: 'Change it',
    id: 6,
    completed: false
  },
  {
    task: 'Mail',
    id: 7,
    completed: true
  },
  {
    task: 'Upgrade it',
    id: 8,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();   
    this.state = {
      tasks: exampleTasks,
      query: '',
      filteredTasks: []
    };
  }
  // end of constructor

  // arrow function implicitly binds the "this" keyword to function
  toggleComplete = todoId => {
    // find the item clicked on
    // toggle completed property
    this.setState({ 
      tasks: this.state.tasks.map(todo => {
        if (todo.id === todoId) {
          return {...todo, completed: !todo.completed};
        } else return todo;
      })
    });
  };

  addTodo = taskName => {
    this.setState({ tasks: [...this.state.tasks, 
      {
        task: taskName,
        id: Date.now(),
        completed: false
      }]
    })
  };

  clearCompletedTasks = () => {
    this.setState({ 
      tasks: this.state.tasks.filter(todo => !todo.completed) 
    });
  };

  clearAllTasks = () => {
    this.setState({
      tasks: []
    });
  };

  // * * * SEARCH functionality

  getResults = query => {
    const results = this.state.tasks.filter(todo => {
      return todo.task.toLowerCase().includes(query.toLowerCase());
    });
    
    this.setState({filteredTasks: results});
  }
  
  handleQueryChange = event => {
    this.setState({ query: event.target.value }, () => this.getResults(this.state.query));
  };

  // * * * PERSIST DATA in localStorage

  updateStorageWithState = () => {
    this.state.tasks.length === 0 ? 
      // if there are no tasks, list will update with example tasks
      localStorage.setItem('user_tasks', JSON.stringify(exampleTasks)) :
      localStorage.setItem('user_tasks', JSON.stringify(this.state.tasks));
  };

  updateStateWithStorage = () => {
    this.setState({
      tasks: JSON.parse(localStorage.getItem('user_tasks'))
    });
  };

  handleLeavePage = (event) => {
    event.preventDefault();
    this.updateStorageWithState();
  };

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
    const sortedTasks = this.state.tasks.sort((a, b) => a.completed - b.completed);

    return (
      <div>
        <h2>Just To-Do It</h2>
        <SearchForm 
          query={this.state.query}
          handleQueryChange={this.handleQueryChange}
        />
        <TodoForm 
          addTodo={this.addTodo}
        />
        <button onClick={this.clearCompletedTasks}>Clear completed tasks</button>
        <button onClick={this.clearAllTasks}>Clear ALL tasks</button>
        <TodoList 
          tasks={sortedTasks}
          toggleComplete={this.toggleComplete}
          filteredTasks={this.state.filteredTasks}
          query={this.state.query}
        />
      </div>
    );
  }
}

export default App;