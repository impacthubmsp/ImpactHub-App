import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Select from 'react-select';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';

const members = [];

function getMembers() {
    axios.get('/api/memb/list')
    .then((response) =>{
        let member = response.data;
        member.map((member)=>{
            members.push({
                label: <span><img className="avatar" src={member.img_url}/>  {member.name} <br/> {member.company}</span> ,
                value: member.cobot_id + member.name
            })
            return members;
           })
    })
  
}

members.map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
  }));



class MemberComponent extends Component {

    constructor() {
        super();

        // This will store the user that is selected from the drop-down menu.
        //Whis will be used for axios request.
        this.state = {
            single: null,
            purpose: null,
            day: null,
            time: null
        }
    }


    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_MEMBERS'})
        getMembers()
        
    }

    handleChange = name => value => {
        this.setState({
          [name]: value,
        });
      };

      handleVisit = (value)  => {
        this.setState({
            purpose: value,
            day: moment().format("L"),
            time: moment().format("LTS")
        })
    }


    handlePost = () => {
        this.props.dispatch({type: 'POST_MEMBER', payload: this.state})
        this.resetForm();
    }

    resetForm = () => {
        this.setState(this.baseState)
      }

    // This function will be carried into the UsernameComponent, and will be called to update the current user when one is selected from the dropdown.


    render() {
        console.log(this.state);

        return (
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <div>
                    {/* Form for members */}
                    <div>
                        <div>
                            Member Login
                        </div>
                        <div>
                            <List component="nav">
                                {/* Component for selecting name & drop-down menu */}
                                <ListItem divider>
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
                                </ListItem>
                                <Divider />

                                <ListItem>
                                    <div>These are checkin options.</div>
                                </ListItem>

                                {/* Buttons for selecting the type of work */}
                                <ListItem>
                                    {/* will appear on dom after the user has been selected.*/}
                                    <Button variant="contained" color="primary" onClick={() => this.handleVisit('Work')} value={this.state.purpose}>
                                        Work
                                    </Button>
                                    <Button variant="contained" color="primary"onClick={() => this.handleVisit('Event')} value={this.state.purpose}>
                                        Event
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={this.handlePost}>
                                        Submit
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={this.resetForm}>
                                        Cancel
                                    </Button>

                                </ListItem>
                                <Divider/>

                                {/* will be used to check the user out if they are checked in. */}
                                <ListItem>
                                    Button for testing out the checkout feature.
                                </ListItem>
                                <ListItem>
                                    <Button variant="contained" color="primary">
                                        Checkout
                                    </Button>

                                </ListItem>
                            </List>

                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect()(MemberComponent);

