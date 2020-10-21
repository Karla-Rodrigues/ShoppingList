import React, { Component } from 'react'

export class AddTodo extends Component {
      state = {
            title: null
      }

      /*    title = null - it generate a warn; however, it's the only way to show placeholder. */

      onChange = (e) => this.setState({ [e.target.name]: e.target.value });

      onSubmit = (e) => {

            console.log(this.state.title);

            if (this.state.title !== ' ' && this.state.title !== null) {
                  e.preventDefault();
                  this.props.addTodo(this.state.title);
                  this.setState({ title: null });
            }

      }

      render() {
            return (
                  <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                        <input
                              type='text'
                              name='title'
                              placeholder='Add Item...'
                              style={{ flex: '10', padding: '10px' }}
                              value={this.state.title}
                              onChange={this.onChange}
                        />
                        <input
                              type='submit'
                              value='Submit'
                              className='btn-green'
                              style={{ flex: '1' }}
                        />

                  </form>
            )
      }
}

export default AddTodo
