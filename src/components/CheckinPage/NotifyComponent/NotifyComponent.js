import React, { Component } from 'react';
import axios from "axios";

class NotifyComponent extends Component {

    // Axios request to send notification via twilio
    sendNotification = () => {
        console.log('Sending notification...');
        axios({
            method: 'post',
            url: 'api/message/notifyTwilio',
          }).then( (response) => {
            console.log(response);
          }).catch(function (error) {
            console.log(error, "sendNotification didnt work");
          });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sendNotification}>
                    <button type="submit">Notify Admin</button>
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default NotifyComponent;