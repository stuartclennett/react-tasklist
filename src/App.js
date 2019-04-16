import React, { Component } from 'react';
// import uuid from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Axios from 'axios';
// Components
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo'
import Todos from './components/Todos';
import About from './components/pages/About';
import Help from './components/pages/Help';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
    .then((res) => {
       this.setState({
         todos: [...res.data]
       });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deleteTodo = (id) => {
    // console.log(id); // we're using the filter higher order function and the spread operator to create a new array (i.e. must copy state, NOT change in situ)
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)] } );
      })
      .catch(err => {
        console.log(err);
      })
  }

  markComplete = (id) => {
    // console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) { 
            todo.completed = !todo.completed 
          };
        return todo;
    }) }); 
  }

  addTodo = (title) => {
    // console.log(title);
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
      userId: 1
    })
    .then(res => {
      this.setState(
        { todos: [...this.state.todos, res.data] }
      );
    })
    .catch(err => {
      console.log(err);
    });
  }


  render() {
    // console.dir(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo 
                  addTodo={this.addTodo} 
                />
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
             )} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            </div>        
        </div>
      </Router>
    );
  }
}

export default App;
