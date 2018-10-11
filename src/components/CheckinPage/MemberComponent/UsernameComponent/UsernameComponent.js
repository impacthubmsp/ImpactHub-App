import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Select from 'react-select';

// Fake member data that for testing functionality
import UserComponent_data from './UsernameComponent_data'

const members = [];

function getMembers() {
   console.log(UserComponent_data);
    UserComponent_data.map((member)=>{
        members.push({
            label: <span><img className="avatar" src={member.avatar}/> <br/> {member.name} <br/> {member.organization} <br/> {member.phoneNumber} </span> ,
            value: member.name + member.organization + member.phoneNumber
        })
       })
}
members.map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
  }));

class UsernameComponent extends Component {
    constructor() {
        super();
        this.state = {
            // Will be used in the callback function to MemberComponent
            selectedMember: '',
            single: null,
            multi: null,
        }
    }
    componentDidMount(){
        getMembers();
    }

    // This will set the user when they are selected from the dropdown.

    handleChange = name => value => {
        this.setState({
          [name]: value,
        });
      };
    // This will update the text field whenever there is a change to the dom
// This contains the function which will be used inside of the render.
                /* This will be replaced with the autofill feature, when its implemented. 
                For now, this is just filler material
                It will display all users from the suggestions array, which will display on the DOM*/
    render() {
        return (
            <div>
                  
            <Select
            className='input'
            isClearable
            options={members}
            value={this.state.multi}
            onChange={this.handleChange('multi')}
            placeholder="Name"
          />
          
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default UsernameComponent;
