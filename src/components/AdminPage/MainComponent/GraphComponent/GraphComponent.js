import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  options: {
    scales: {
      yAxes: [{stacked:true}]
    }
  }
};

const monthlyData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Members',
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#b2dfdb',
      borderColor: '#b2dfdb',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 50, 45, 89, 87, 30]
    },
    {
      label: 'Visitors',
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#ffab91',
      borderColor: '#ffab91',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20,78, 76, 34, 89, 73, 34, 89, 23, 134, 67, 78]
    }
  ]
};

class GraphComponent extends Component {
  constructor() {
    super();
    this.state = {
      dailyAttendanceData: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
          label: "Members",
          backgroundColor: ["#b2dfdb", "#b2dfdb", "#b2dfdb", "#b2dfdb", "#b2dfdb"],
          data: [10, 40, 20, 50, 20]
        },
        {
          label: "Visitors",
          backgroundColor: ["#ffab91", "#ffab91", "#ffab91", "#ffab91", "#ffab91"],
          data: [5, 10, 10, 30, 5]
        }]
      },
      /* pastMonthAttendanceData: {
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
      } */
    }
  }
  // Renders graph displayed based on variable selected from dropdown



  render() {
    return (
      <div className="viewContainer">
        <select>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
          <Line id="monthLine" data={monthlyData} 
          options={{
            title: {
              display: true,
              text: 'Visits by Month',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              yAxes: [{ stacked: true }]
            }
          }} />

      </div>
    );
  }
}

export default GraphComponent;

