import React, { Component } from 'react';
import './GroupLoginComponent.css';

class GroupLoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            groupName: '', // name of the group (to be sent to database)
            purposeOfVisit: '', // purpose of the group's visit  (will be sent to database)
            numberOfPeople: '', // number of people in the group ( will be sent to database)
        }
    }
    // onChange, the input values are sent to local state
    setGroupDetailsFromInput = (event) =>{
        console.log('In setGroupDetailsFromInput function');
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    // the purpose buttons change the local state on click 
    setGroupDetailsFromButton =(event)=>{
        console.log('In setGroupDetailsFromButton function');
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    //write a function here that sends local state to database on form submit


  render() {
      return (
        <div>
            {/* Form Container*/}
            <div className="viewContainer" >
                {/* Form to Check-in Each Guest*/}
                <form id= "groupCheck-InForm">
                    <h2>Group Check-in</h2>
                    {JSON.stringify(this.state)}
                    <label>Group Name</label>
                    <br/>
                    *optional
                    <br/>
                    <input name="groupName" placeholder="Junior Innovators League" style={{ width:"200px" }} onChange={this.setGroupDetailsFromInput}></input>
                    <br/>
                    <label>Reason for Visiting</label>
                    <br/>
                    {/*Replace buttons below with radio buttons*/}
                    <button>Tour</button><button>Event</button><button>Visiting a Member</button><button>Other</button>
                    <br/>
                    <label>Number of People in the Group </label>
                    <br/>
                    <input name="numberOfPeople" type="number" placeholder="e.g. 10" style={{ width:"50px" }} onChange={this.setGroupDetailsFromInput}></input>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
      );
  }
}

export default GroupLoginComponent;

