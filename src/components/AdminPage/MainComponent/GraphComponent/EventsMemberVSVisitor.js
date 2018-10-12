import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class EventsMemberVSVisitor extends Component {
  constructor() {
    super();
    this.state = {
      dailyAttendanceData: {
        labels: ["Date1", "Date2", "Date3", "Date4", "Date5", "Date6", "Date7",],
        datasets: [{
          label: "Members",
          backgroundColor: ["#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF"],
          data: [10, 40, 20, 50, 20, 30, 40]
        },
        {
          label: "Visitors",
          backgroundColor: ["#e6e6fa", "#e6e6fa", "#e6e6fa", "#e6e6fa", "#e6e6fa", "#e6e6fa", "#e6e6fa"],
          data: [10, 40, 20, 50, 20, 30, 40]
        }]
      }
    }
  }
  // GET route for graph data will be here



  render() {
    return (
      <div className="viewContainer">
        <Bar
          data={this.state.dailyAttendanceData}
          options={{
            title: {
              display: true,
              text: 'Check-in Traffic',
              fontSize: 25
            },
            legend: {
              position: 'bottom'
            },
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{ stacked: true }]
            }
          }}
          height={120}
        />
      </div>
    );
  }

}

export default EventsMemberVSVisitor;
