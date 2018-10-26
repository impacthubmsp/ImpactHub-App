import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import VisitorComponent from './VisitorComponent/VisitorComponent';
import MemberComponent from './MemberComponent/MemberComponent';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import NotifyComponent from './NotifyComponent/NotifyComponent';

const styles = theme => ({
    masterGrid: {
      marginTop: "60px",
    },
    notify:{
      
    }
});

const mapStateToProps = state => ({
  user: state.user,
});

class CheckinPage extends Component {
  

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }


  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('/home');
    }
  }

  
  render() {
    const { classes } = this.props
    return (
      <div style={{width:'100%', height:'100%'}}>
        <div style={{position:'fixed', top:'0%', width:'100%'}} >
          <Nav history={this.props.history} />
          <Grid container className={classes.masterGrid} spacing={0}>
            <VisitorComponent />
            <MemberComponent />
          </Grid>
        </div>

        <div style={{position:'fixed', bottom:'0%', width:'100%',}} >
          <NotifyComponent className={classes.notifyComponent} />
        </div>
      </div>
    );
  }
}

CheckinPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CheckinPageWrapper = withStyles(styles)(CheckinPage);

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CheckinPageWrapper);
