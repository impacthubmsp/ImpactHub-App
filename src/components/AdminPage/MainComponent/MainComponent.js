import React, { Component } from 'react';
import GroupLoginComponent from './GroupLoginComponent/GroupLoginComponent';
import NewContactComponent from './NewContactComponent/NewContactComponent';
import KPIComponent from './KPIComponent/KPIComponent';
import CurrentMemberVSVisitor from './GraphComponent/CurrentMemberVSVistor';
import TownHallComponent from '../TownHallComponent/TownHallComponent';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import './MainComponent.css';
import TwilioComponent from './TwilioComponent/TwilioComponent';
import GraphMasterComponent from './GraphComponent/GraphMasterComponent';

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
                <div className="masonry-layout">
                    <div className={classNames("masonry-layout_column", "leftColumn")}>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <CurrentMemberVSVisitor />
                                <GraphMasterComponent />
                            </Paper>
                        </div>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <KPIComponent />
                            </Paper>
                        </div>
                    </div>
                    <div className={classNames("masonry-layout_column", "centerColumn")}>
                            <div className="subColumnHalf">
                                <div className={classNames("masonry-layout_panel")}>
                                    <Paper className={classNames("paper", "middleTwo")}>
                                        <TwilioComponent />
                                    </Paper>
                                </div>
                            </div>
                            <div className="subColumnHalf">
                                <div className={classNames("masonry-layout_panel")}>
                                    <Paper className={classNames("paper", "middleTwo")}>
                                        <GroupLoginComponent />
                                    </Paper>
                                </div>
                            </div>
                            <div className="masonry-layout_panel">
                                <Paper className="paper">
                                    <NewContactComponent />
                                </Paper>
                            </div>
                    </div>
                    <div className={classNames("masonry-layout_column", "rightColumn")}>
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <TownHallComponent/>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div >)

    }
}

export default MainComponent;

