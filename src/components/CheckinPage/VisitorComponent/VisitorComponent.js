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
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';
const styles = {
    root: {
        position: 'relative',
        display: 'flex',
        justify: 'center',
        flexDirection: 'column',
    },
    container: {
        position: 'absolute',
        top: '40%',
        left: '40px',
        width: '500px',
        margin: '0 0 40px 0'
    }
}

class VisitorComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            purpose: null,
            interest: false,
            day: null,
            time: null,
            email: '',
            phone: '',
            status: true,
            open: false
        }
        // preserve the initial state in a new object
        this.baseState = this.state
    }

    handleShowBtn = () => {
        console.log('YAY!!', this.state.open);
        this.setState({
            open: true,
        });
    }
    handleToggleClick = () => {
        this.setState(state => ({
            interest: !state.interest
        }));
    }

    handleVisit = (value) => {
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
    handleClickAway = () => {
        this.setState({
            open: false,
            purpose: null
        });
    };

    handlePost = () => {
        this.props.dispatch({ type: 'POST_VISITOR', payload: this.state })
        // send user to mailchimp if interested
        this.handleMailChimp();
        //fix reset feature, not resetting interest
        this.resetForm();
    }
    handleMailChimp = () => {
        //  If the user is interested, then post to mailchimp
        if (this.state.interest === true) {
            let name = this.state.name;
            let nameArray = name.trim().split(" ");
            let fName = nameArray[0];
            let lName = nameArray[nameArray.length - 1];

            let userToAdd = {
                "email_address": this.state.email,
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": fName,
                    "LNAME": lName,
                    "PHONE": this.state.phone,
                }
            }
            console.log('sending to mailchimp', userToAdd);
            this.props.dispatch({ type: 'ADD_MAILCHIMP', payload: userToAdd })
        }
    }
    resetForm = () => {
        this.setState(this.baseState)
    }
    handleAlignment = (event, purpose) => this.setState({ purpose });
    render() {

        const { classes } = this.props;
        const { purpose, interest } = this.state;

        return (

            <Grid className="classes" item xs={6} sm={6} md={6} lg={6} className={classes.root}>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                    <Paper className={classes.container}>
                        <div style={{ margin: '15px 0 0 40px' }}>
                            <Typography variant="h3">
                                Are you a visitor?
                        </Typography>
                        </div>
                        <div style={{ padding: '0 30px 0 30px' }}>
                            <List >
                                <ListItem>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Full Name"
                                        name="name"
                                        onChange={this.handleInfo}
                                        value={this.state.name}
                                        onFocus={this.handleShowBtn}
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
                            </List>
                            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemText secondary="What brings you in today?" />
                                   <FormControlLabel
                                   control={
                                    <ToggleButtonGroup value={purpose} exclusive onChange={this.handleAlignment} style={{ padding: 0, margin:'0 0 0 20px' }}>
                                        <ToggleButton value="guest" style={{ border: '1px solid darkgrey' }}>
                                            Guest
                                        </ToggleButton>
                                        <ToggleButton value="event" style={{ border: '1px solid darkgrey' }}>
                                            Event
                                        </ToggleButton>
                                        <ToggleButton value="tour" style={{ border: '1px solid darkgrey' }}>
                                            Tour
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                   }
                                //    labelPlacement="start"
                                //    label="What brings you in today?"
                                   />
                                    {/* Select Interest in membership */}
                                    <ListItem divider>
                                        {/* Checkbox for selecting interest */}
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onClick={this.handleToggleClick}
                                                />
                                            }
                                            label="Are you interested in more information about membership options?"
                                        />
                                        {/* Accompanying text for selecting interest */}
                                        {/* <ListItemText primary="Are you interested in more information about membership options?" /> */}
                                    </ListItem>
                                    {/* Enter email address for interest */}
                                    {/* TO-DO hide email and phone number entry */}
                                    {this.state.interest ? <ListItem divider>
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
                                    </ListItem> : ''}
                                    {/* Enter phone number for interest */}
                                    <ListItem>
                                        {/* the variant 'contained' switches the color of the background and text */}
                                        <Button variant="contained" color="primary" onClick={this.handlePost}>
                                            Submit
                                    </Button>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </div>
                    </Paper>
                </ClickAwayListener>
            </Grid >
        );
    }
}
const mapStateToProps = state => ({
    members: state.members
});
VisitorComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};
const VisitWithStyle = withStyles(styles)(VisitorComponent)
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(VisitWithStyle);

