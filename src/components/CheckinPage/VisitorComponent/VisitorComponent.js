import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Phone from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import moment from 'moment';

class VisitorComponent extends Component {
    constructor(){
        super()
        this.state = {
        name: '',
        purpose: '',
        interest: false,
        day: null,
        time: null,
        email: '',
        phone: '',
        status: true,
    }
        // preserve the initial state in a new object
        this.baseState = this.state 
      }

    handleToggleClick = () => {
        this.setState(state => ({
          interest: !state.interest
        }));
      }

    handleVisit = (value)  => {
        this.setState({
            purpose: value
        })
    }
    handleInfo = (event) => {
        //change data base to TIME from TIMESTAMP
        this.setState({
            [event.target.name]: event.target.value,
            day: moment().format("L"),
            time: moment().format("LTS")
        })
    }

    handlePost = () => {
        this.props.dispatch({type: 'POST_DATA', payload: this.state})
        this.resetForm();
    }

    resetForm = () => {
        this.setState(this.baseState)
      }


    render() {
        console.log(this.state);
        
       
        return (
            <Grid className="classes" item xs={6} sm={6} md={6} lg={6}>
                <div>
                    {/* Form for visitors */}
                    <div>
                        <div>
                            Are you a visitor?
                            </div>
                        {/* Visitor Enter name */}
                        <div>
                            <List component="nav">
                                <ListItem>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Full Name"
                                        name="name"
                                        onChange={this.handleInfo}
                                        value={this.state.name}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem divider>
                                    {/* Visitor Select Purpose */}
                                    <div>
                                        <Button variant="contained" onClick={() => this.handleVisit('Event')} value={this.state.purpose}>
                                            Event
                                            </Button>
                                        <Button variant="contained" onClick={() => this.handleVisit('Guest')} value={this.state.purpose}>
                                            Guest
                                            </Button>
                                        <Button variant="contained" onClick={() => this.handleVisit('Tour')} value={this.state.purpose}>
                                            Tour
                                            </Button>
                                    </div>
                                </ListItem>
                                {/* Select Interest in membership */}
                                <ListItem divider>
                                    {/* Checkbox for selecting interest */}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onClick={this.handleToggleClick}
                                            />
                                            
                                        }
                                        
                                    />
                                    {/* Accompanying text for selecting interest */}
                                    <ListItemText primary="Are you interested in more information about membership options?" />
                                </ListItem>
                                {/* Enter email address for interest */}
                                {/* TO-DO hide email and phone number entry */}
                                {this.state.interest ?  <ListItem divider>
                                    <TextField
                                        id="filled-email-input"
                                        label="Email Address"
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInfo}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AlternateEmail />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </ListItem> : ''}

                                 {this.state.interest ? <ListItem divider>
                                    <TextField
                                        id="filled-email-input"
                                        label="Phone Number"
                                        name="phone"
                                        type="number"
                                        value={this.state.phone}
                                        onChange={this.handleInfo}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Phone />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </ListItem>  : ''}
                               
                                {/* Enter phone number for interest */}
                                
                                <ListItem>
                                    {/* the variant 'contained' switches the color of the background and text */}
                                    <Button variant="contained" color="primary" onClick={this.handlePost}>
                                        Submit
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
export default connect()(VisitorComponent);

