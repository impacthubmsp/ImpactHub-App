import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

class EventsMemberVSVisitor extends Component {
  constructor() {
    super();
    this.state = {// filling with dummy data for presentation. function to get data from database is disabled in componentDidMount and should be undone after presentation
      memberEventData: [10, 8, 16, 2, 25],
      visitorEventData: [10, 23, 45, 24, 30],
      eventLabels: ['10/01/2018','10/11/2018', '10/17/2018','10/22/2018','10/24/2018'],
    }
  }
 /* function to get event attendance for last seven events, each broken down by member and visitor */

  componentDidMount(){
    //function to get attendance data is commented out for presentation's sake UNDO WHEN DONE
  }

  render() {
    const eventAttendance = {
      labels: this.state.eventLabels,
      datasets: [{
        label: "Members",
        backgroundColor: ["#b2dfdb", "#b2dfdb", "#b2dfdb", "#b2dfdb", "#b2dfdb", "#b2dfdb", "#b2dfdb"],
        data: this.state.memberEventData,
      },
      {
        label: "Visitors",
        backgroundColor: ["#ffab91", "#ffab91", "#ffab91", "#ffab91", "#ffab91", "#ffab91", "#ffab91"],
        data: this.state.visitorEventData,
      }]
    };

    return (
      <div className="viewContainer">
        <Bar
          data={eventAttendance}
          options={{
            title: {
              display: true,
              text: 'Event Traffic',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{ stacked: true }]
            }
          }}
        />
      </div>
    );
  }

}

export default EventsMemberVSVisitor;
