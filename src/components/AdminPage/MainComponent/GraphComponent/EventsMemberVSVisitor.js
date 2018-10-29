import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

class EventsMemberVSVisitor extends Component {
  constructor() {
    super();
    this.state = {
      memberEventData: [],
      visitorEventData: [],
      eventLabels: [],
    }
  }
  /* function to get event attendance for last five events, each broken down by member and visitor */
  getEventsMemberData = () => {
    console.log('in getEventsMemberData');
    axios({
      method: 'GET',
      url: '/api/admin/recentEventsData',
    }).then((response) => {
      console.log(response.data);
      let data = response.data
      let memberCount =[];
      let visitorCount = [];
      let dates = [];
      for (let i = 0; i < data.length; i++) {
        dates.push(data[i].day)
        memberCount.push(data[i].member_count)
        visitorCount.push(data[i].visitor_count)
      }
      this.setState({
        memberEventData: memberCount,
        eventLabels: dates,
        visitorEventData: visitorCount,
      })
    }).catch((error) => {
      console.log(error, 'Error event data for members', error);
      alert('Error getting event data for members');
    })
  }

  componentDidMount() {
    this.getEventsMemberData();
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
