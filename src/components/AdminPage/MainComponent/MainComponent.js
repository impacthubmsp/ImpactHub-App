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
            currentGuestCount: 10,
            currentDeskContact: 6417809108, //this is Kara's phone number for default testing 
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
  render() {
      return (
        <div>
            {/*This will display the count of current guests*/}
            <div id="currentGuestCount">
                <h3>{this.state.currentGuestCount} current guests</h3>
            </div>
            {/*This is wear the current Front Desk Attendant adds the phone number they would like to be texted at*/}
            <div id="setCurrentDeskCell">
                <form id="callBellCellForm">
                    <label>Set the Call Bell Cell:</label>
                    <input type="text" placeholder="(000) 867-5309"/>
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

