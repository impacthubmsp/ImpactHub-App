import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Fake member data that for testing functionality
import UserComponent_data from './UsernameComponent_data'

class UsernameComponent extends Component {
    constructor() {
        super();
        this.state = {
            // Will contain the entire array of members used for suggestions.
            suggestions: UserComponent_data,

            // Will be used in the callback function to MemberComponent
            selectedMember: '',
        }
    }

    // This will set the user when they are selected from the dropdown.
    setSelectedUser = (toSelect) => {
        this.setState({
            selectedMember: toSelect,
        })
    }

    // This will update the text field whenever there is a change to the dom
    componentDidUpdate = () => {
        this.inputFieldDisplay();
    }

    // This contains the function which will be used inside of the render.
    inputFieldDisplay = () => {
        return (
            <div>
                {/* Input field for name to be typed */}
                <TextField
                    id="input-with-icon-textfield"
                    label="Full Name"
                    value={this.state.selectedMember}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} />

                {/* This will be replaced with the autofill feature, when its implemented.
                
                For now, this is just filler material
                
                It will display all users from the suggestions array, which will display on the DOM*/}
                <div>
                    {this.state.suggestions.map((member, i) => {
                        return (
                            <div key={i}>
                                {/* Member avatar */}
                                <img src={member.avatar} alt="member avatar" />
                                <br />

                                {/* Temporary button for setting the member,w hen they are clicked */}
                                <button onClick={() => this.setSelectedUser(member.name)}>
                                    Select This User
                                    </button>

                                {/* Member information that will be displayed when they appear in the drop down menu */}
                                <br />
                                {member.name}
                                <br />
                                {member.organization}
                                <br />
                                {member.phoneNumber}
                                <br />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.inputFieldDisplay()}
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default UsernameComponent;

