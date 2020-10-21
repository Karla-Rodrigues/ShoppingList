import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './components/Banner';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/About'
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid'

class App extends Component {
  state = {

    todos: [
      {
        id: uuid(),
        title: 'milk',
        complete: false
      },
      {
        id: uuid(),
        title: 'bread',
        complete: false
      },
      {
        id: uuid(),
        title: 'cheese',
        complete: false
      },
      {
        id: uuid(),
        title: 'eggs',
        complete: false
      }
    ]
  };

  markComplete = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo;
      })
    })

  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      complete: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <Router>
        <div className='App'>
          <div className='container'>

            <Route exact path={'/ShoppingList'} render={props => (
              <React.Fragment>
                <Banner />
                <AddTodo addTodo={this.addTodo} />
                <main>
                  <Todos todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo} />
                </main>
                <Footer />
              </React.Fragment>
            )} />
            <Route exact path={'/about'} component={About} />

          </div>
        </div>
      </Router>

    );
  }
}

export default App;