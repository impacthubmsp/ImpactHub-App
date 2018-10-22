import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import {Input, Grid, FormControl, Button} from '@material-ui/core';
import swal from 'sweetalert';
import axios from 'axios';



const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      conFirmpassword: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch(clearError());
  }



  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }



  setPassword = (event) => {
    console.log('in setPassword');

    event.preventDefault();

    if (this.state.newPassword === '') {
        swal('Please enter a new password' ,
         {icon:'warning'})
    
    }
    else if (this.state.newPassword !== '' && this.state.confirmPassword === '') {
        swal('Please Confirm Password' ,
         {icon:'warning'})
    
    }
    else if (this.state.newPassword !== this.state.confirmPassword) {
        swal('Passwords Do not Match' ,
         {icon:'warning'})
    }
    else {
        const body = {
            inviteCode: this.state.inviteCode,
            password: this.state.newPassword,
        }

        axios.put('/api/user/newpassword', this.state)
            .then((response) => {
                
                if (response.status === 201) {
                    this.props.history.replace('/home');
                    swal('Password Reset Successful' , 
                    {icon:'success'})
                } else {
                    swal('Unable to reset password. Please Try again.',
                        { icon: 'warning' })
                }
            })
            .catch((error) => {
            swal('Unable to reset password.',
                    { icon: 'warning' })
            });
    }
} //end setPassword

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
      <div >
        {this.renderAlert()}
        <form onSubmit={this.sendPost}>
          <h1>Reset Password</h1>
          <Grid container>
            <Grid item xs={12}>
              <FormControl style={{ width: '80%', marginBottom: '10px' }}>
              <Input
                  fullWidth
                  id="password"
                  placeholder="New Password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('newPassword')}
                  inputProps={{
                    'aria-label': 'Password',
                  }}
                  fullwidth
                />
              </FormControl>
              <br />
              <FormControl style={{ width: '80%' }}>
                <Input
                  fullWidth
                  id="password"
                  placeholder="Confirm Password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('confirmpassword')}
                  inputProps={{
                    'aria-label': 'Password',
                  }}
               
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
            
            <Button
                size="small"
                variant="contained"
                type="submit"
                name="submit"
                color="primary"
                style={{ margin: '20px' }}
              >

                Submit
            </Button>
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);