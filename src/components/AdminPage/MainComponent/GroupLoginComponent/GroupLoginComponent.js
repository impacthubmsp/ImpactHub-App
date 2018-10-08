import React, { Component } from 'react';
import './GroupLoginComponent.css';

class GroupLoginComponent extends Component {
  render() {
      return (
        <div>
            {/* Form Container*/}
            <div className="container" className="viewContainer" >
                {/* Form to Check-in Each Guest*/}
                <form id= "groupCheck-InForm">
                    <h2>Group Check-in</h2>
                    <label>Group Name</label>
                    <br/>
                    optional
                    <br/>
                    <input placeholder="Junior Innovators League" style={{ width:"200px" }}></input>
                    <br/>
                    <label>Reason for Visiting</label>
                    <br/>
                    <button>Tour</button><button>Event</button><button>Visiting a Member</button><button>Other</button>
                    <br/>
                    <label>Number of People in the Group </label>
                    <br/>
                    <input type="number" placeholder="e.g. 10" style={{ width:"50px" }}></input>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
      );
  }
}

export default GroupLoginComponent;

