import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';



class GraphComponent extends Component {
  
  constructor() {
    super();
    this.state = { // populated with dummy data for the presentation; setState functions are not put in componentDidMount
      graphToShow: 'today',
      memberVisitToday: [3, 4, 23, 10, 4, 10, 0],
      visitorVisitToday: [0, 0, 4, 5, 7, 10, 1],
      memberVisitThisWeek: [25, 30, 40, 27 ],
      visitorVisitThisWeek: [6, 12, 10, 8],
      memberVisitThisMonth: [25, 30, 40, 45, 89, 0, 0, 48, 34, 45, 46, 54, 0, 0, 23, 34, 45, 34, 12, 0, 0, 34, 45, 44, 45],
      visitorVisitThisMonth: [6, 12, 10, 8, 0, 0, 0, 2, 12, 13, 17, 9, 0, 0, 9, 3, 12, 5, 9, 0, 0, 15, 15, 13],
      memberVisitByMonth: [65, 59, 80, 81, 56, 55, 40, 50, 45, 65],
      visitorVisitByMonth: [29, 78, 76, 34, 89, 73, 34, 89, 23, 134],
    
    }
  }
  //function to get number of visits per hour today

  //function to get number of visits per day last 7 days

  //function to get the number of visits per day this month

  //function to get the number of visits per month this year

  componentDidMount(){
    //functions to get data from database are commented out here for presentation UNDO WHEN DONE

  }
  // Renders graph displayed based on variable selected from dropdown
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
      })
}
  render() {
    const showGraph=this.state.graphToShow; //establishes a variable for which iteration of the traffic graph to show
    //data for today's hourly check-in traffic
    const dailyData = {
      labels: ['7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00pm'],
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
          data: this.state.memberVisitToday
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
          data: this.state.visitorVisitToday
        }
      ]
    };
    //data for this week's traffic by day 
    const weeklyData = {
      labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
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
          data: this.state.memberVisitToday
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
          data: this.state.visitorVisitToday
        }
      ]
    };
    //data for this month's traffic by day
    const monthlyData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
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
          data: this.state.memberVisitThisMonth
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
          data: this.state.visitorVisitThisMonth
        }
      ]
    };
    //data for this year's traffic by month
    const yearlyData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
      datasets: [
        {
          label: 'Members',
          fill: true,
          lineTension: 0.1,
          backgroundColor: '#b2dfdb', // background color for member data
          borderColor: '#b2dfdb', // border line color for member data
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
          data: this.state.memberVisitByMonth
        },
        {
          label: 'Visitors',
          fill: true,
          lineTension: 0.1,
          backgroundColor: '#ffab91', // background color for visitors
          borderColor: '#ffab91', // border line color for visitors
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
          data: this.state.visitorVisitByMonth
        }
      ]
    };
    return (
      <div className="viewContainer">
        <select name="graphToShow" onChange={this.handleChange}>
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="thisMonth"> This Month </option>
          <option value="thisYear">This Year</option>
        </select>
        {/* Graph for today's traffic; only renders if today is selected on dropdown*/}
        {showGraph==='today' && <Line id="todayLine" data={dailyData}
          options={{
            title: {
              display: true,
              text: 'Visits Today',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              yAxes: [{ stacked: true }]
            }
          }} />}
        {/* Graph for this week's traffic; only renders if "this week" is selected on dropdown*/}
        {showGraph=="thisWeek" && <Line id="weekLine" data={weeklyData}
          options={{
            title: {
              display: true,
              text: 'Visits this Week',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              yAxes: [{ stacked: true }]
            }
          }} />}
        {/* Graph for this month's traffic; only renders if "this month" is selected on dropdown*/}
        {showGraph==='thisMonth' && <Line id="monthLine" data={monthlyData}
          options={{
            title: {
              display: true,
              text: 'Visits This Month',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              yAxes: [{ stacked: true }]
            }
          }} />}
        {/* Graph for this year's traffic; only renders if "this year" is selected on dropdown*/}
        {showGraph==='thisYear' && <Line id="yearLine" data={yearlyData}
          options={{
            title: {
              display: true,
              text: 'Visits This Year',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              yAxes: [{ stacked: true }]
            }
          }} />}
      </div>
    );
  }
}

export default GraphComponent;