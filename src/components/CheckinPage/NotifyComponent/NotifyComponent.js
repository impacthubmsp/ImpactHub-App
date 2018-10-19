import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class NotifyComponent extends Component {

    // Axios request to send notification via twilio
    sendNotification = () => {
        console.log('Sending notification...');
        axios({
            method: 'post',
            url: 'api/message/notifyTwilio',
        }).then((response) => {
            console.log(response);
        }).catch(function (error) {
            console.log(error, "sendNotification didnt work");
        });
    }

    render() {
        return (
            <div >
                <Tooltip title="Need Help? Click Here To Notify an Attendant">
                    <Button
                        variant="outlined"
                        color="secondary"
                        style={{ left: '45%', margin: '10px' }}
                        onClick={this.sendNotification}
                    >
                        <FontAwesomeIcon icon={faConciergeBell} size="lg" />
                    </Button>
                </Tooltip>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default NotifyComponent;