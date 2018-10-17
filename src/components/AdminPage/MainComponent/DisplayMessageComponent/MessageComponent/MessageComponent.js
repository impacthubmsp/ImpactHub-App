import React, { Component } from 'react';

class MessageComponent extends Component {

    render() {
        return (
            <div>
                {this.props.data.sender_name}
                <br/>
                {this.props.data.date_time}
                <br/>
                {this.props.data.body}
                <br/>
                {this.props.data.cobot_id}
                <hr />
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default MessageComponent;

