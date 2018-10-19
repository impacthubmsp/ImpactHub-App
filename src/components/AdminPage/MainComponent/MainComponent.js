import React, { Component } from 'react';
import GraphComponent from './GraphComponent/GraphComponent';
import GroupLoginComponent from './GroupLoginComponent/GroupLoginComponent';
import TableComponent from './TableComponent/TableComponent';
import NewContactComponent from './NewContactComponent/NewContactComponent';
import KPIComponent from './KPIComponent/KPIComponent';
import CurrentMemberVSVisitor from './GraphComponent/CurrentMemberVSVistor';
import VisitorAddInfo from './GraphComponent/VisitorAddInfo';
import EventsMemberVSVisitor from './GraphComponent/EventsMemberVSVisitor';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './MainComponent.css';

import TwilioComponent from './TwilioComponent/TwilioComponent';

class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            currentGuestCount: 0, //defaults to zero
            currentDeskContactPhone: '', //phone number that will be texted when call bell is clicked
            currentDeskContactName: '', //name of the front desk admin on duty
        }
    }
    // sets the localState with the contact info of the desk attendant who will be contactable via call bell-iniatied text message
    setCurrentDeskContact = (event) => {
        console.log('in setCurrentDeskContact function');
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value,
        })
    }
    // write a function to send local state to database of call bell contacts


    // write a function here that GETs the number of people present from the database and sets it to state

    render() {
        return (
            <div id="adminView">
            <TwilioComponent />
                <Grid container>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className="paper">
                            <h2>Placeholder for Twilio</h2>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className="paper">
                            <GroupLoginComponent />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper className="paper">
                        <KPIComponent />
                    </Paper>
                    </Grid>
                    <Paper className="paper">
                        <GraphComponent />
                    </Paper>
                    <Paper className="paper">
                        <CurrentMemberVSVisitor />
                    </Paper>
                    <Paper className="paper">
                        <VisitorAddInfo />
                    </Paper>
                    <Paper className="paper">
                        <EventsMemberVSVisitor />
                    </Paper>
                    <Paper className="paper">
                        <TableComponent />
                    </Paper>
                    <Paper className="paper">
                        <NewContactComponent />
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export default MainComponent;

