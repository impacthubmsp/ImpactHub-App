import React, { Component } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RoomService from '@material-ui/icons/RoomService';
const styles = {
    buttons:{
        background: 'linear-gradient(0deg, #ddd, #fff)',
       // borderRadius: 3,
        border: 0,
       // height: 48,
        //padding: '0 30px',
    }
}
   

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
        const { classes } = this.props;
        return (
            <div >
                <Tooltip title="Need Help? Click Here To Notify an Attendant">
                    <Button
                    className={classes.buttons}
                        variant="fab"
                        style={{ left: '45%', margin: '10px' }}
                        onClick={this.sendNotification}
                    >
                       <RoomService />
                    </Button>
                </Tooltip>
            </div>
        );
    }
}
NotifyComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

// this allows us to use <App /> in index.js
export default withStyles(styles)(NotifyComponent);