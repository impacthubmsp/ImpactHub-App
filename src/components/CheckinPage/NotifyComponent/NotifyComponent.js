import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import swal from 'sweetalert2'

const styles = {
    buttons: {
        background: 'linear-gradient(0deg, #ddd, #fff)',
        borderRadius: 3,
        border: 0,
        height: 48,
        //padding: '0 30px',
    }
}


class NotifyComponent extends Component {
    constructor() {
        super();
        this.state = {
            currentAdmin: {
                admin_name: [],
                phone_number: [],
            }
        }
    }

    componentDidMount = () => {
        this.getAdminInfo();
    }

    // Retrieves the login information for the current admin.
    getAdminInfo = () => {
        axios({
            method: 'get',
            url: 'api/message/getTwilioSettings',
        }).then((response) => {
            console.log('current admin is: ', response.data[0]);
            if(response.data[0] === undefined) {
                return;
            }
            else {
                this.setState({
                    currentAdmin: {
                        admin_name: response.data[0].admin_name,
                        phone_number: response.data[0].phone_number,
                    }
                })
            }
        }).catch(function (error) {
            console.log(error, "sendNotification didnt work");
        });
    }


    // Renders sweet alert and submits axios request
    sendNotification = () => {

        switch (this.state.currentAdmin.phone_number) {
            case 0:
                swal(
                    'Sorry!',
                    'No admin on-call at this time.',
                    'error',
                )
                return;
            default:
                swal(
                    'Please Wait!',
                    'An admin will meet you at the front desk.',
                    'info'
                )
                this.sendNotification_axios();

        }
    }

    // Axios request to send notification via twilio
    sendNotification_axios = () => {
        const adminPhone = this.state.currentAdmin.phone_number
        axios({
            method: 'post',
            url: 'api/message/notifyTwilio/' + adminPhone,
        }).then((response) => {
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
                        variant="contained"
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
NotifyComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

// this allows us to use <App /> in index.js
export default withStyles(styles)(NotifyComponent);