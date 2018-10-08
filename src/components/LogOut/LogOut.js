import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = state => ({
  user: state.user,
});

class LogOut extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }
  
  // componentDidUpdate runs after props and state have changed.
  //If we arent loading the user call AND we dont have a user, kick us out to home
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      // this.props.history.push('/home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
  }

  render() {

    return (
      <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>

          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(LogOut);

