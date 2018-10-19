import React, { Component } from 'react';
import axios from 'axios';

class TwilioComponent extends Component {
    constructor() {
        super();
        this.state = {
            currentTwilioSetting: {},
            newTwilioSetting: {},
            loggedIn: false,
        }
    }

    componentDidMount = () => {
        this.getTwilioSettings();
    }

    // Axios request to send notification via twilio
    getTwilioSettings = () => {
        console.log('getting /getTwilioSettings');
        axios({
            method: 'get',
            url: 'api/message/getTwilioSettings',
        }).then((response) => {
            this.setState({
                currentTwilioSetting: response.data[0]
            })
        }).then(() => {
            switch (this.state.currentTwilioSetting) {
                case '':
                    this.setState({
                        loggedIn: false,
                    })
                    break;
                default:
                    this.setState({
                        loggedIn: true,
                    })
            }
        }).catch(function (error) {
            console.log(error, "getTwilioSettings didnt work");
        });
    }

    displayCurrentReciever = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <div>
                        {this.state.currentTwilioSetting.admin_name + " - " + this.state.currentTwilioSetting.phone_number}
                    </div>
                )
            default:
                return (
                    <div>
                        Please set a phone number
                    </div>
                )
        }
    }

    setNewTwilio = () => {
        console.log('setting Twillio')
    }
    handlePhoneNumberChange = (event) => {
        this.setState({
            newTwilioSetting: {
                admin_name: this.state.newTwilioSetting.admin_name,
                phone_number: event.target.value
            }
          })
      }
      handleAdminNameChange = (event) => {
        this.setState({
            newTwilioSetting: {
                admin_name: event.target.value,
                phone_number: this.state.newTwilioSetting.phoneNumber
            }
          })
      }

    render() {
        return (
            <div>

                <form onSubmit={this.setNewTwilio}>
                    <div>
                        Current Twilio Setting: {this.displayCurrentReciever()}
                    </div>
                    <hr />
                    Set new phone number for twilio
                    <br />

                    {this.state.newTwilioSetting.phone_number}
                    <input type="tel" onChange={this.handlePhoneNumberChange} defaultValue={this.state.newTwilioSetting.phone_number} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default TwilioComponent;

