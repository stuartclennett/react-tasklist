import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    render() {
        return (
            <div>
                <p > {this.props.msg}<button style={ dismissBtn } onClick={this.props.onDismissMessage}>x</button></p>
            </div>
        )
    }        
}

const dismissBtn = {
    color: 'white',
    background: '#aaa',
    border: 'none',
    padding: "2px 9px",
    borderRadius: "50%",
    float: 'right',
    cursor: "pointer"
}   

Message.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Message;