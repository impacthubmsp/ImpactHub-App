import React, { Component } from 'react';
import './GroupLoginComponent.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Swal from 'sweetalert2'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

class GroupLoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: '', // name of the group (sent to database on form submit)
            purpose: '', // purpose of the group's visit  (sent to database on form submit)
            quantity: '', // number of people in the group (sent to database on form submit)
        }
    }
    // onChange, the input values are sent to local state
    setGroupDetailsFromInput = (event) => {
        console.log('In setGroupDetailsFromInput function');
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    // the purpose buttons change the local state on click 
    setGroupDetailsFromButton = (event) => {
        console.log('In setGroupDetailsFromButton function');
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    //write a function here that sends local state to database on form submit
    sendGroupToDatabase = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/api/visi/group',
            data: this.state
        }).then((response) => {
            toast.fire({
                type: 'success',
                title: 'Signed in Successfully'
            });
            console.log('Group visit successfully added to database', response);
            this.setState({
                name: '',
                purpose: '',
                quantity: '',
            })
        }).catch((error) => {
            console.log('an error has occurred while trying to send group visit data to the database', error);
            toast.fire({
                type: 'error',
                title: 'Sign in Unsuccessful'
            })
        })
    }

    //sets the value of purpose for visiting in state, which is sent to the database on form submit
    handleBTNclick = (event, purpose) => {
        this.setState({
            purpose
        })
        console.log(this.state);

    }

    //"depress" purpose button that has been selected
    depressPurposeBTN = () => {

    }


    render() {
        const { purpose } = this.state;
        return (
            <div>
                {/* Form Container*/}
                <div className="viewContainer" >
                    {/* Form to Check-in Each Guest*/}
                    {/* <form id="groupCheck-InForm" onSubmit={this.sendGroupToDatabase}> */}
                    <h2>Group Check-in</h2>

                    <Typography>
                        Group Name
                        <br />
                        *optional
                    </Typography>

                    <TextField
                        className="groupInput"
                        name="name"
                        placeholder="e.g. Jr. Innovators League"
                        style={{ width: "180px" }}
                        onChange={this.setGroupDetailsFromInput} />

                    <div style={{ marginTop: '20px' }}>
                        <Divider />
                        <Typography>Reason for Visiting</Typography>

                    </div>

                    {/*Buttons set the state for purpose of visit*/}
                    {/* <Button id="tourBTN" className="purposeBTN" onClick={() => this.handleBTNclick('tour')}>Tour</Button>
                        <Button id="eventBTN" className="purposeBTN" onClick={() => this.handleBTNclick('event')}>Event</Button>
                        <Button id="memberVisitBTN" className="purposeBTN" onClick={() => this.handleBTNclick('memberVisit')}>Visiting a Member</Button>
                        <Button id="otherBTN" className="purposeBTN" onClick={() => this.handleBTNclick('other')}>Other</Button> */}
                    <ToggleButtonGroup
                        value={purpose}
                        exclusive
                        onChange={this.handleBTNclick}
                        style={{ padding: 0 }}>
                        <ToggleButton value="tour">
                            Tour
                            </ToggleButton>
                        <ToggleButton value="event">
                            Event
                            </ToggleButton>
                        <ToggleButton value="memberVisit">
                            Visit Member
                            </ToggleButton>
                        <ToggleButton value="other">
                            Other
                            </ToggleButton>
                    </ToggleButtonGroup>
                    <Divider />
                    <br />
                    <Typography>Number of People in the Group </Typography>
                    <Input
                        className="groupInput"
                        name="quantity"
                        type="number"
                        placeholder="e.g. 10"
                        style={{ width: "50px" }}
                        onChange={this.setGroupDetailsFromInput} />
                    <div style={{ padding: '15px' }}>
                        <Button
                            variant="contained"
                            type="submit"
                            value="Submit"
                            onClick={this.sendGroupToDatabase}>Submit</Button>
                    </div>
                    {/* </form> */}
                </div>
            </div>
        );
    }
}

export default GroupLoginComponent;

