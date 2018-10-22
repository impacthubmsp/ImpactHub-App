import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  }
};


class GraphModalAppBarComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar variant="dense">
            <IconButton onClick={this.props.closeBar} className={classes.menuButton} color="inherit" aria-label="Menu">
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Back
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

GraphModalAppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GraphModalAppBarComponent);