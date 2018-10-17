import React, { Component } from 'react';
import './GroupLoginComponent.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class GroupLoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: '', // name of the group (sent to database on form submit)
            purpose: '', // purpose of the group's visit  (sent to database on form submit)
            quantity: '', // number of people in the group (sent to database on form submit)
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
    sendGroupToDatabase = () => {
        axios({
            method: 'POST',
            url: '/api/visi/group',
            data: this.state
        }).then((response)=>{
            console.log('Group visit successfully added to database', response);
        }).catch((error)=>{
            console.log('an error has occurred while trying to send group visit data to the database', error);
            alert('Error submitting group visit data')
        })
    }

    //sets the value of purpose for visiting in state, which is sent to the database on form submit
    handleBTNclick = (value) => {
        this.setState({
            purpose: value,
        })
    }

    //"depress" purpose button that has been selected
    depressPurposeBTN = () => {
        
    }


  render() {
      return (
        <div>
            {/* Form Container*/}
            <div className="viewContainer" >
                {/* Form to Check-in Each Guest*/}
                <form id= "groupCheck-InForm" onSubmit={this.sendGroupToDatabase}>
                    <h2>Group Check-in</h2>
                    <label>Group Name</label>
                    <br/>
                    *optional
                    <br/>
                    <input className="groupInput" name="name" placeholder="e.g. Junior Innovators League" style={{ width:"240px" }} onChange={this.setGroupDetailsFromInput}></input>
                    <br/>
                    <label>Reason for Visiting</label>
                    <br/>
                    {/*Buttons set the state for purpose of visit*/}
                    <Button id="tourBTN" className="purposeBTN" onClick={() => this.handleBTNclick('tour')}>Tour</Button><Button id="eventBTN" className="purposeBTN" onClick={() => this.handleBTNclick('event')}>Event</Button><Button id="memberVisitBTN" className="purposeBTN" onClick={() => this.handleBTNclick('memberVisit')}>Visiting a Member</Button><Button id="otherBTN" className="purposeBTN" onClick={() => this.handleBTNclick('other')}>Other</Button>
                    <br/>
                    <label>Number of People in the Group </label>
                    <br/>
                    <input className="groupInput" name="quantity" type="number" placeholder="e.g. 10" style={{ width:"50px" }} onChange={this.setGroupDetailsFromInput}></input>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
      );
  }
}

export default GroupLoginComponent;

