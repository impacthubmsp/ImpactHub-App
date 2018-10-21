import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import VisitorReason from './VisitorReasonComponent'

class EventsMemberVSVisitor extends Component {
  constructor() {
    super();
    this.state = {
      memberEventData: [],
      visitorEventData: [],
      eventLabels: [],
    }
  }
  // GET route for graph data will be here



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
        <VisitorReason/>
      </div>
    );
  }

}

export default EventsMemberVSVisitor;
