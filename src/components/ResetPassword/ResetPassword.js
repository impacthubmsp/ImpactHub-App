import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import {Input, Grid, FormControl, Button} from '@material-ui/core';




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

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName !== null) {
      this.props.history.push('admin');
    }
  }


  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

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
    return (
      <div>
      <div >
        {this.renderAlert()}
        <form onSubmit={this.login}>
          <h1>Reset Password</h1>
          <Grid container>
            <Grid item xs={12}>
              <FormControl style={{ width: '80%', marginBottom: '10px' }}>
                <Input
                  name="newPassword"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('newPassword')}
                  placeholder="New Password"
                  inputProps={{
                    'aria-label': 'newPassword',
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
                  onChange={this.handleInputChangeFor('password')}
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