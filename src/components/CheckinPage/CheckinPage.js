import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import VisitorComponent from './VisitorComponent/VisitorComponent';
import MemberComponent from './MemberComponent/MemberComponent';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NotifyComponent from './NotifyComponent/NotifyComponent';
const styles = theme => ({
    masterGrid: {
    },
});


class CheckinPage extends Component {
  
  render() {
    const { classes } = this.props
    return (
      <div>
        <Nav history={this.props.history} />
        <NotifyComponent />
        <Grid container className={classes.masterGrid} spacing={0}>
          <VisitorComponent />
          <MemberComponent />
        </Grid>
      </div>
    );
  }
}

CheckinPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// this allows us to use <App /> in index.js
export default withStyles(styles)(CheckinPage);
