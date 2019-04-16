import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './layout/Message';

class AddTodo extends Component {
 
  // our state object is a representation of the form values, not of an actual To Do Itme at this point
  state = {
      title: '',
      isError : false
  }

  getStyle = () => {
      return {
          color: 'purple'
      }
  }

  onChangeHandler = (sender) => {
      this.setState(
          {
              [sender.target.name]: sender.target.value
          }
      );
  }

  onSubmit = (sender) => {
    sender.preventDefault();  // don't let it submit to the page
    if (this.state.title !== '') {
        this.props.addTodo(this.state.title);  // pass the title up one level !!
        this.setState({ title: '', isError: false});           // clear form basically
    } else {
        this.setState({title: this.state.title, isError: true});
    }
  }

  handleDismissMessage = (sender) => {
      const aTitle  = this.state.title;
      this.setState( {
          title: aTitle,
          isError : false
      })
  }

  render() {
    return (
        <React.Fragment>
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add to do"
                style={{flex: 10, padding: '5px'}} 
                value={this.state.title} 
                onChange={this.onChangeHandler}
                />
                <input type="submit" value="submit" className="btnSubmit" style={{flex: 2}} />
            </form>
            {this.state.isError ? <Message onDismissMessage={this.handleDismissMessage} msg="Please enter a description for the To do item" /> : null }
        </React.Fragment>        
    );
  }
}

// Prop Types declaration - it's good practice  (NOTE THIS ISN'T STATE !!!!)
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;