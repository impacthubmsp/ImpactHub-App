import React, { Component } from 'react';
import axios from "axios";

class SendMessageComponent extends Component {

    constructor() {
        super();
        this.state = {
            messageToSend: '',
        }
    }

    // Axios request to post a new message from the user
    sendMessage = () => {
        const messageToSend = {
            sender_name: 'Jakeh Clark',
            body: this.state.messageToSend,
            cobot_id: '123456-78'
        }
        axios({
            method: 'post',
            url: 'api/message/sendMessage',
            data: messageToSend,
          }).then( (response) => {
            console.log(response);
          }).catch(function (error) {
            console.log(error, "sendMessage didnt work");
          });
    }
    // Updates the messageToSend state to match the value of the input field
    handleInputChange = (event) => {
        this.setState({
            messageToSend: event.target.value
          })
      }

    render() {
        return (
            <div>
                <form onSubmit={this.sendMessage}>
                    Leave a message for the admin
                    <br />
                    <input type="text" placeholder="message" onChange={this.handleInputChange} value={this.state.messageToSend} />
                    <input type="submit" />
                    {this.state.messageToSend}
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default SendMessageComponent;