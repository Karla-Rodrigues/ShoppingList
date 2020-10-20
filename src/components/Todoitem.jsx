import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {

      getStyle = () => {

            return {
                  textDecoration: this.props.todo.complete ? 'line-through' : 'none'
            }

      }

      render() {

            const { id, title } = this.props.todo;

            return (
                  <div className="page-item">
                        <div style={this.getStyle()}>
                              <p>
                                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
                                    {' '} {title}
                                    <button className="btn-red" onClick={this.props.delTodo.bind(this, id)}>X</button>
                              </p>
                        </div>
                  </div>
            )
      }
}

Todoitem.propTypes = {
      todo: PropTypes.object.isRequired
}

export default Todoitem
