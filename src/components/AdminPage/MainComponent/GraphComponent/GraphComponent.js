import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class GraphComponent extends Component {
  constructor() {
    super();
    this.state = {
      dailyAttendanceData: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
          label: "Members",
          backgroundColor: ["#35DDFF", "#35DDFF", "#35DDFF", "#35DDFF", "#35DDFF"],
          data: [10, 40, 20, 50, 20]
        },
        {
          label: "Visitors",
          backgroundColor: ["#c45850", "#c45850", "#c45850", "#c45850", "#c45850"],
          data: [5, 10, 10, 30, 5]
        }]
      },
      pastMonthAttendanceData: {
        labels: [1, 5, 10, 15, 20, 25, 30],
        datasets: [
          {
            label: 'Members',
            data: [10, 20, 45, 50, 70, 80, 20],
            borderColor: '#35DDFF',
            backgroundColor: ["#35DDFF", "#35DDFF", "#35DDFF", "#35DDFF", "#35DDFF"],
            fill: false,
            borderWidth: '2px'
          },
          {
            label: 'Visitors',
            data: [2, 2, 2, 1, 0, 0, 1, 5, 9, 50],
            borderColor: '#35DDFF',
            backgroundColor: '#35DDFF',
            fill: false,
            borderWidth: '2px'
          }
        ]
      }
    }
  }
  // Renders graph displayed based on variable selected from dropdown
 /*  graphToDisplay = () => {
    switch (this.state.viewGraph) {
      case 'today':
      //return ({todaysAttendance})
      case 'week':
      //return ({weeksAttendance})
      case 'month':
      //return ({monthsAttenance})
      default:
        return (<div><GraphComponent /></div>)
    }
  } */

  // GET route for graph data will be here



  render() {
    return (
      <div className="viewContainer">
        <select>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
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
          //height={120}
        />

      </div>
    );
  }
}

export default GraphComponent;

