import React, { Component } from 'react';

import UsernameComponent from './UsernameComponent/UsernameComponent'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

class MemberComponent extends Component {

    constructor() {
        super();

        // This will store the user that is selected from the drop-down menu.
        //Whis will be used for axios request.
        this.state = {
            currentUser: '',
        }
    }

    // This function will be carried into the UsernameComponent, and will be called to update the current user when one is selected from the dropdown.
    setCurrentUser = (selectedUser) => {
        // this.setState({
        //     currentuser: selectedUser,
        // })
        console.log('setCurrentUser callback function working!');
    }

    render() {
        return (
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <div>
                    {/* Form for members */}
                    <div>
                        <div>
                            Member Login
                        </div>
                        
                        <div>
                            <List component="nav">

                                {/* Component for selecting name & drop-down menu */}
                                <ListItem divider>
                                    <UsernameComponent callback={this.setCurrentUser} />
                                </ListItem>
                                <Divider />

                                <ListItem>
                                    <div>These are checkin options.</div>
                                </ListItem>

                                {/* Buttons for selecting the type of work */}
                                <ListItem>
                                    {/* will appear on dom after the user has been selected.*/}
                                    <Button variant="contained" color="primary">
                                        Work
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        Event
                                    </Button>
                                    <Button variant="contained">
                                        Cancel
                                    </Button>
                                </ListItem>
                                <Divider/>

                                {/* will be used to check the user out if they are checked in. */}
                                <ListItem>
                                    Button for testing out the checkout feature.
                                </ListItem>
                                <ListItem>
                                    <Button variant="contained" color="primary">
                                        Checkout
                                    </Button>

                                </ListItem>
                            </List>

                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}

// this allows us to use <App /> in index.js
export default MemberComponent;

