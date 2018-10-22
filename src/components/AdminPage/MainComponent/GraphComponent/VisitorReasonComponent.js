import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

class VisitorReason extends Component {
    constructor() {
        super();
        this.state = { //currently changed these values to dummy data for presentation-- change back to zero when presentation is over
            // setting all state variables to zero, will be replaced by values from the database if there are any matching the field 
            tour: 190,
            guest: 88,
            event: 200,
            other: 56,
        }

    }
    //function to get data from database and set to state for the graph
    getVisitorPurposes = () => {
        console.log('in getVisitorPurposes');
        axios({
            method: 'GET',
            url:'/api/admin/visitorsPurpose',
        }).then((response)=>{
            console.log(response.data);
            for (let i =0; i < response.data.length; i++){
                this.setState({ 
                    [response.data[i].purpose]: Number(response.data[i].count) // sets state of the appropriate variable to the number of entries in the database with corresponding purpose
                })
            }
        }).catch((error)=>{
                console.log(error, 'Error getting visitors\' purposes');
                alert('Visitors\' purposes could\'t be obtained');
        })
    }
    componentDidMount(){
        //commented out the function below for the sake of the presentatio UNDO WHEN OVER
        //this.getVisitorPurposes();
    }
    render(){
        const data = {
            labels: [
                'Tour',
                'Guest',
                'Event',
                'Other'
            ],
            datasets: [{
                data: [this.state.tour, this.state.guest, this.state.event, this.state.other],
                backgroundColor: [
                    '#DBB3B1',
                    '#526F73',
                    '#907F9F',
                    '#95A3B3'
                ],
                hoverBackgroundColor: [
                    '#DBB3B1',
                    '#526F73',
                    '#907F9F',
                    '#95A3B3'
                ]
            }]
        };
        return(
            <div>
                < Pie
                    options={{
                        title: {
                            display: true,
                            text: 'Visitors\' Purpose in the Space',
                            fontSize: 25
                        }
                    }}

                    data={data}
                />

            </div>
        )
    };
}
export default VisitorReason;
