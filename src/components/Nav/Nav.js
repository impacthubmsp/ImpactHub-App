import React, { Component } from 'react';
import { connect } from 'react-redux';

import { triggerLogout } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import MainAppBar from "./MainAppBar/MainAppBar"

const mapStateToProps = state => ({
  user: state.user,
});

class Nav extends Component {
  constructor(props) {
    super(props);
    console.log('HERE');
  }

  // componentDidUpdate runs after props and state have changed.
  //If we arent loading the user call AND we dont have a user, kick us out to home

 
  logout = () => {
    this.props.dispatch(triggerLogout());
    console.log('logout function');
  }


  pushToAdmin = () => {
    this.props.history.push('/admin');
  }

  pushToCheckin = () => {
    this.props.history.push('/checkin');
    window.location.reload()
  }

  render() {
    return (
     <MainAppBar logout={this.logout} admin={this.pushToAdmin} checkin={this.pushToCheckin} />
    )

  }
}

export default connect(mapStateToProps)(Nav);