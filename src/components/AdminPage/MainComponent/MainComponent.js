import React, { Component } from 'react';
import GraphComponent from './GraphComponent/GraphComponent';
import GroupLoginComponent from './GroupLoginComponent/GroupLoginComponent';
import TableComponent from './TableComponent/TableComponent';

class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            viewMode: 'grouplogin'
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
    // Renders display based on the current mode
    modeToDisplay = () => {
        switch (this.state.viewMode) {
            case 'graph':
                return (<div><GraphComponent /></div>)
            case 'grouplogin':
                return (<div><GroupLoginComponent /></div>)
            case 'table':
                return (<div><TableComponent /></div>)
            default:
                return (<div><GraphComponent /></div>)
        }
    }
  render() {
      return (
        <div>
            {/* Display for the main admin functions */}
            <div>
            {this.modeToDisplay()}
            </div>

            {/* Button for changing the current admin function in view */}
            <div>
            <button onClick={this.setGraphMode}>Graph</button>
            <button onClick={this.setGroupLoginMode}>Group Login</button>
            <button onClick={this.setTableMode}>Table</button>
            </div>
        </div>
      );
  }
}

export default MainComponent;

