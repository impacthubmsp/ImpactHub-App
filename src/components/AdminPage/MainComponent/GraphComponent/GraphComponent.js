import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GraphComponent extends Component {
  constructor() {
    super();
    this.state = {
      dailyAttendanceData: {
        labels: [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
        datasets: [
          {
            label: 'Members',
            data: [1, 2, 4, 5, 7, 8, 2, 4, 1, 0, 10],
            borderColor: '#35DDFF',
            backgroundColor: 'red',
            fill: true,
            borderWidth: '2px'
          },
          {
            label: 'Visitors',
            data: [2, 2, 2, 1, 0, 0, 1, 5, 9, 10, 10],
            borderColor: '#35DDFF',
            backgroundColor: '#35DDFF',
            fill: true,
            borderWidth: '2px'
          }
        ]
      },
      pastMonthAttendanceData: {
        labels: [1, 5, 10, 15, 20, 25, 30],
        datasets: [
          {
            label: 'Members',
            data: [10, 20, 45, 50, 70, 80, 20],
            borderColor: '#35DDFF',
            backgroundColor: '#35DDFF',
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
  graphToDisplay = () => {
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
}

// GET route for graph data will be here



  render() {
    return (
      <div className="viewContainer">
        <select>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
          <Line
            data={this.state.dailyAttendanceData}
            options={{
              title: {
                display: true,
                text: 'Traffic',
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

export default GraphComponent;

