import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
      state = {}
      render() {
            return (
                  <div className="page-list">
                        {this.props.todos.map((todo) => (
                              <Todoitem key={todo.id}
                                    todo={todo}
                                    markComplete={this.props.markComplete}
                                    delTodo={this.props.delTodo} />
                        ))}
                  </div>
            )
      }
}

Todos.protoType = {
      todos: PropTypes.array.isRequired
}

export default Todos;