import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

//dialog for forgot password 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import swal from 'sweetalert';


const mapStateToProps = state => ({
  user: state.user,
});

class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: '',
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  sendEmailAddress = (event) => {
    event.preventDefault();
    console.log('email submitted');

    axios({
      method: 'PUT',
      url: '/api/user/resetpw',
      data: {username: this.state.email}
  }).then((response) => {
        console.log('response finding email:', response);
        this.handleClose();
        swal('Password Reset Email Sent. Please check your e-mail!',
          { icon: 'success' })
      })
      .catch((error) => {
        if (error.status === 404) {
          swal('Email Address Not Found',
            { icon: 'warning' })
        }

        else {
          swal('Email Address Not Found',
            { icon: 'warning' })
        }
        console.log('error finding email in database:', error);

      });
    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>forgot password?</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              Enter your email address we will send you a link to reset your password.
              </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              onChange={this.handleInputChangeFor("email")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.sendEmailAddress} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ForgotPassword);