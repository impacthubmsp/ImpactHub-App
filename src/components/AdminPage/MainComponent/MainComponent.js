import React, { Component } from 'react';
import GraphComponent from './GraphComponent/GraphComponent';
import GroupLoginComponent from './GroupLoginComponent/GroupLoginComponent';
import NewContactComponent from './NewContactComponent/NewContactComponent';
import KPIComponent from './KPIComponent/KPIComponent';
import CurrentMemberVSVisitor from './GraphComponent/CurrentMemberVSVistor';
import VisitorAddInfo from './GraphComponent/VisitorAddInfo';
import EventsMemberVSVisitor from './GraphComponent/EventsMemberVSVisitor';
import CSVComponent from './CSVComponent/CSVComponent';
import TownHallComponent from '../TownHallComponent/TownHallComponent';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
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
                <div className="masonry-layout">
                    <div className={classNames("masonry-layout_column", "leftColumn")}>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <CurrentMemberVSVisitor />
                            </Paper>
                        </div>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <TownHallComponent/>
                            </Paper>
                        </div>
                    </div>
                    <div className={classNames("masonry-layout_column", "centerColumn")}>
                        <div className={classNames("masonry-layout_column", "subColumnHalf")}>
                            <div className="masonry-layout_panel">
                                <Paper className="paper">
                                    <h2>Placeholder for Twilio</h2>
                                </Paper>
                            </div>
                            <div className="masonry-layout_panel">
                                <Paper className={classNames("paper")}>
                                    <GroupLoginComponent />
                                </Paper>
                            </div>
                        </div>
                        <div className={classNames("masonry-layout_column", "subColumnHalf")}>
                            <div className="masonry-layout_panel">
                                <Paper className="paper">
                                    <CSVComponent />
                                </Paper>
                            </div>
                            <div className="masonry-layout_panel">
                                <Paper className="paper">
                                    <h2>Test Thang</h2>
                                    <img src="https://via.placeholder.com/250x330?text=Table+Component" alt="placeholder" />
                                </Paper>
                            </div>
                        </div>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <GraphComponent />
                            </Paper>
                        </div>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <EventsMemberVSVisitor />
                            </Paper>
                        </div>
                    </div>
                    <div className={classNames("masonry-layout_column", "rightColumn")}>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <KPIComponent />
                            </Paper>
                        </div>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <NewContactComponent />
                            </Paper>
                        </div>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <VisitorAddInfo />
                            </Paper>
                        </div>
                    </div>
                </div>
            </div >)

    }
}

export default MainComponent;

