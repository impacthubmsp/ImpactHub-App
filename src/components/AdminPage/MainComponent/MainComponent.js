import React, { Component } from 'react';
import GraphComponent from './GraphComponent/GraphComponent';
import GroupLoginComponent from './GroupLoginComponent/GroupLoginComponent';
import TableComponent from './TableComponent/TableComponent';
import NewContactComponent from './NewContactComponent/NewContactComponent';
import './MainComponent.css';

class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            viewMode: 'grouplogin',
            currentGuestCount: 0, //defaults to zero
            currentDeskContactPhone: '', //phone number that will be texted when call bell is clicked
            currentDeskContactName: '', //name of the front desk admin on duty
        }
    }
    // Functions for setting the mode onClick
    setGraphMode = () => {
        this.setState({
            viewMode: 'graph',
        })
    }
    setGroupLoginMode = () => {
        this.setState({
            viewMode: 'grouplogin',
        })
    }
    setTableMode = () => {
        this.setState({
            viewMode: 'table',
        })
    }
    setContactMode = () => {
        this.setState({
            viewMode: 'contact',
        })
    }
    // Renders display based on the current mode
    modeToDisplay = () => {
        switch (this.state.viewMode) {
            case 'graph':
                return (<div><GraphComponent /></div>)
            case 'grouplogin':
                return (<div><GroupLoginComponent /></div>)
            case 'table':
                return (<div><TableComponent /></div>)
            case 'contact':
                return(<div><NewContactComponent /></div>)
            default:
                return (<div><GraphComponent /></div>)
        }
    }
    // sets the localState with the contact info of the desk attendant who will be contactable via call bell-iniatied text message
    setCurrentDeskContact = (event) => {
        console.log('in setCurrentDeskContact function');
        this.setState({
            [event.target.name]: event.target.value ,
            [event.target.name]: event.target.value ,
        })
    }
    // write a function to send local state to database of call bell contacts


    // write a function here that GETs the number of people present from the database and sets it to state

  render() {
      return (
        <div>
            {/*This will display the count of current guests*/}
            <div id="currentGuestCount">
                <h3>{this.state.currentGuestCount} current guests</h3>
            </div>
            {/*This is wear the current Front Desk Attendant adds the phone number they would like to be texted at*/}
            <div id="setCurrentDeskCell">
                <form id="callBellCellForm" > {/* Add a function here onSubmit to send local state to database so data persists even if page is closed and across different runs of the application */}
                    <label>Set the Call Bell Cell:</label>
                    <input name="currentDeskContactName" type="text" placeholder="e.g. Mia" onChange={this.setCurrentDeskContact}></input>
                    <input name="currentDeskContactPhone" type="text" placeholder="(000) 867-5309" onChange={this.setCurrentDeskContact}></input>
                    <input type="submit" value="Submit"/>
                    <h5>Currently on call: {this.state.currentDeskContactName} @ {this.state.currentDeskContactPhone}</h5> {/*Replace this with display of info called from Database*/} 
                </form>

            </div>
            {/* Display for the main admin functions */}
            <div>
            {this.modeToDisplay()}
            </div>

            {/* Button for changing the current admin function in view */}
            <div>
            <button onClick={this.setGraphMode}>Graph</button>
            <button onClick={this.setGroupLoginMode}>Group Login</button>
            <button onClick={this.setTableMode}>Table</button>
            <button onClick={this.setContactMode}>New Contacts</button>
            </div>
        </div>
      );
  }
}

export default MainComponent;

