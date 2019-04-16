import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
 
  getStyle = () => {
    return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: "1px #ccc dotted",
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }


  render() {
    // console.log(this.props.todos);  // Passed from App.js
    // destructuring to use the consts later on
    const {id, title} = this.props.todo;
    return (
        <div style={ this.getStyle() } >
            <p>
                <input
                    type="checkbox" 
                    onChange={this.props.markComplete.bind(this, id)}
                    /> 
                {' '}
                { title }
                {' '}
                <button style={ trashCanStyle } onClick={this.props.deleteTodo.bind(this, id)}> <i className="far fa-trash-alt" /></button>
            </p>
        </div>
    );
  }
}

const trashCanStyle = {
    color: 'white',
    background: 'red',
    border: 'none',
    padding: "5px 9px",
    borderRadius: "50%",
    float: 'right',
    cursor: "pointer"
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem;