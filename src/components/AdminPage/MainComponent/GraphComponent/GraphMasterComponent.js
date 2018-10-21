import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import GraphModalComponent from './GraphModalComponent';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: `90%`,
        height: `90%`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        overflow: 'auto',
        overflowY: 'scroll',
    },
});

class GraphMasterComponent extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
    
        return (
          <div>
            <Typography gutterBottom>Charts and Graphs</Typography>
            <Button onClick={this.handleOpen}>Open Modal</Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <GraphModalComponent />
              </div>
            </Modal>
          </div>
        );
      }
    }

    GraphMasterComponent.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      // We need an intermediary variable for handling the recursive nesting.
      const GraphMasterComponentWrapped = withStyles(styles)(GraphMasterComponent);

    export default GraphMasterComponentWrapped;