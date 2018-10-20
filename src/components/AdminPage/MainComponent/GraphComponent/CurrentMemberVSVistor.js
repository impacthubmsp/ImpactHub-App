import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';



class CurrentMemberVSVisitor extends Component {
    constructor() {
        super();
        this.state = {
            currentVisitors: null,
            currentMembers: '10',
            currentGuests:''//(this.state.currentVisitors + this.state.currentMembers),
        }

    }

    //gets the amount of members currently in the space from the database and sets state value
    getCurrentMembers = () => {
        console.log('in getCurrentMembers');
        axios({
            method: 'GET',
            url:'/api/admin/currentMemberCount',
        }).then((response)=>{
            console.log(response.data);
            this.setState({
                currentMembers: Number(response.data[0].sum),
            })
        }).catch((error)=>{
                console.log(error, 'Error getting current members');
                alert('Current members could\'t be obtained');
        })
    }
    //gets the amount of guests in the space from the database and sets the state value
    getTodaysVisitors = () => {
        console.log('in getTodaysVisitors');
        axios({
            method: 'GET',
            url:'/api/admin/todayGuestCount',
        }).then((response)=>{
            console.log(response.data.sum);
            this.setState({
                currentVisitors: Number(response.data[0].sum),
            })
        }).catch((error)=> {
            console.log(error, 'Error getting today\'s visitors');
            alert ('Today\'s visitors could not be obtained');
        })
    }
    componentDidMount(){
        this.getCurrentMembers();
        this.getTodaysVisitors();
    }
    render() {
        const data = {
            labels: [
                'Visitors',
                'Members'
            ],
            datasets: [{
                data: [this.state.currentVisitors, this.state.currentMembers],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB'
                ]
            }]
        };
        const dataHere = this.state.currentMembers;
        return (
            <div className="viewContainer">
                {dataHere && < Pie
                    options={{
                        title: {
                            display: true,
                            text: 'Current Guests',
                            fontSize: 18
                        }
                    }}

                    data={data}
                />}
                <h4>{this.state.currentGuests} current guests</h4>
            </div>
        );
    }
}

export default CurrentMemberVSVisitor;