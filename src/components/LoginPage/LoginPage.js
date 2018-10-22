import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }


  componentDidMount() {
    // starts request for server to check that we are logged in
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch(clearError());
  }

  componentDidUpdate() {
    // if we have a response from the server and the user is logged in, redirect to the /user URL
    if (!this.props.user.isLoading && this.props.user.userName !== null) {
      this.props.history.push('/admin');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
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
        {this.renderAlert()}
        <Paper style={{
          width: '30%',
          height: '250px',
          margin: '20px auto',
          marginTop:'10%',
          padding: '25px',
          borderRadius: '2px',
          alignContent:'right'
          
        }}>
          <h1>Login</h1>
          <div style={{margin:'10px'}}>
            <TextField
              type="text"
              name="username"
              value={this.state.username}
              label="Username"
              fullWidth
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <div style={{margin:'10px'}}>
            <TextField
              type="password"
              name="password"
              label="Password"
              fullWidth
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />

          </div>
          <div style={{margin:'10px'}}>
            <Button
            onClick={this.login()}
              value="Log In"
            >
              Login
            </Button>
            <Button>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
