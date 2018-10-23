import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      password: '',
      confirmPassword: '',
      code: '',
      showPassword: false
    };
  }

  componentDidMount() {
    this.getInviteCode();
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  getInviteCode = () => {
    this.setState({
      code: window.location.href.slice(30)
    })
}

handleClickShowPassword = () => {
  this.setState(state => ({ showPassword: !state.showPassword }));
};

  setPassword = (event) => {
    console.log('in setPassword');

    event.preventDefault();

    if (this.state.password === '') {
        swal('Please enter a new password' ,
         {icon:'warning'})
    
    }
    else if (this.state.password !== '' && this.state.confirmPassword === '') {
        swal('Please Confirm Password' ,
         {icon:'warning'})
    
    }
    else if (this.state.password !== this.state.confirmPassword) {
        swal('Passwords Do not Match' ,
         {icon:'warning'})
    }
    else {
      const body = {
        password: this.state.password,
        token: this.state.code,
      };

        axios.put('/api/user/newpassword', body)
            .then((response) => {
                
                if (response.status === 200) {
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
    console.log(this.state.code);
    
    return (
      <div>
      <div >
        {this.renderAlert()}
        <form onSubmit={this.setPassword}>
          <h1>Reset Password</h1>
          <Grid container>
            <Grid item xs={12}>
              <FormControl style={{ width: '80%', marginBottom: '10px' }}>
              <Input
                  fullWidth
                  id="password"
                  placeholder="New Password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  onChange={this.handleInputChangeFor('password')}
                  inputProps={{
                    'aria-label': 'password',
                  }}
                  fullwidth
                />
              </FormControl>
              <br />
              <FormControl style={{ width: '80%' }}>
              <Input
                  fullWidth
                  id="password"
                  placeholder="New Password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  onChange={this.handleInputChangeFor('confirmPassword')}
                  inputProps={{
                    'aria-label': 'Password',
                  }}
                  fullwidth
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