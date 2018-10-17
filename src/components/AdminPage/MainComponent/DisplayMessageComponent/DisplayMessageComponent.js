import React, { Component } from 'react';
import axios from "axios";
import MessageComponent from './MessageComponent/MessageComponent';

class DisplayMessageComponent extends Component {

    constructor() {
        super();
        this.state = {
            messages: [],
        }
    }
    // When component loads, will get the last 15 twilio messages from the DB
    componentDidMount = () => {
        this.getMessages();
    }
    // Axior request to retrieve twilio messages from teh server
    getMessages = () => {
        axios({
            method: 'get',
            url: 'api/message/getMessages',
        }).then((response) => {
            console.log('response from messages', response.data);
            this.setState({
                messages: response.data,
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                {/* Will create a new component for each of the messages */}
                {this.state.messages.map((message, i) => {
                    return (
                        <div key={i}>
                            <MessageComponent data={message}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default DisplayMessageComponent;

