import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';



class GraphComponent extends Component {
  
  constructor() {
    super();
    this.state = {
      graphToShow: 'today',
      memberVisitToday: [],
      visitorVisitToday: [],
      memberVisitThisWeek: [],
      visitorVisitThisWeek: [],
      memberVisitThisMonth: [],
      visitorVisitThisMonth: [],
      memberVisitByMonth: [65, 59, 80, 81, 56, 55, 40, 50, 45, 89, 87, 30],
      visitorVisitByMonth: [29, 78, 76, 34, 89, 73, 34, 89, 23, 134, 67, 78],
    
    }
  }
  //function to get number of visits per hour today

  //function to get number of visits per day last 7 days

  //function to get the number of visits per day this month

  //function to get the number of visits per month this year
  
  componentDidMount(){

  }
  // Renders graph displayed based on variable selected from dropdown
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
      })
}
  render() {
    const showGraph=this.state.graphToShow;
    const dailyData = {
      labels: ['7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00pm'],
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
    const weeklyData = {
      labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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
    const monthlyData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
          data: this.state.memberVisitByMonth
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
          data: this.state.visitorVisitByMonth
        }
      ]
    };
    const yearlyData = {
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
          data: this.state.memberVisitByMonth
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