import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import GraphModalComponent from './GraphModalComponent';
import GraphModalAppBarComponent from './GraphModalAppBarComponent'

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
        width: `80%`,
        height: `80%`,
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
                <Button onClick={this.handleOpen}>Data Visualization</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <div>
                            <GraphModalAppBarComponent closeBar={this.closeAppBar} />
                        </div>
                        <GraphModalComponent closeAppBar={this.handleClose} />
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