import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GraphComponent extends Component {
  constructor() {
    super();
    this.state = {
      dailyAttendanceData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
          {
            label: 'Attendance',
            data: [1, 2, 4, 5, 7, 8, 2, 4, 1, 0],
            borderColor: '#35DDFF',
            backgroundColor: '#35DDFF',
            fill: false,
            borderWidth: '2px'
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className="viewContainer">
        <Line
          data={this.state.dailyAttendanceData}
          options={{
            title: {
              display: true,
              text: 'Attendance Today',
              fontSize: 25
            },
            legend: {
              position: 'bottom'
            },
          }}
          height={150}
        // width={1200}

        />
      </div>
    );
  }
}

export default GraphComponent;

