import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Select from 'react-select';
import { connect } from 'react-redux';
// Fake member data that for testing functionality
import UserComponent_data from './UsernameComponent_data'
import axios from 'axios';


const mapStateToProps = state => ({
    members: state.members
  });
const members = [];

function getMembers() {
    axios.get('/api/memb/list')
    .then((response) =>{
        let member = response.data;
        member.map((member)=>{
            members.push({
                label: <span><img className="avatar" src={member.img_url}/> <br/> {member.name} <br/> {member.company}</span> ,
                value: member.name
            })
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

            single: null,
        }
    }
    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_MEMBERS'})
        getMembers()
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
       
        <Select
            className="container"
            classNamePrefix="input"
            isClearable
            noOptionsMessage={() => 'Start by typing your member name'}
            backspaceRemovesValue
            options={members}
            value={this.state.single}
            onChange={this.handleChange('single')}
            placeholder="Name"
          />
        
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UsernameComponent);
