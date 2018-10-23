import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';



class VisitorAddInfo extends Component {
    constructor() {
        super();
        this.state = {
            visitorsAddInfo: null, // will be set by function with the number of visitors who indicated they wanted additional info by filling out their email and phone number
            totalVisitors: null, //will be set by function with the total number of visitors in the database
        }

    }
    
    //function to setState with the number of total visitors (as recorded in the database)
    getTotalVisitors = () => {
        console.log('in getTotalVisitors');
        axios({
            method: 'GET',
            url:'/api/admin/totalVisitors',
        }).then((response)=>{
            console.log(response.data);
            this.setState({
                totalVisitors: Number(response.data[0].sum),
            })
        }).catch((error)=>{
                console.log(error, 'Error getting total visitors');
                alert('Total visitors could\'t be obtained');
        })
    }
    //function to setState with the number of visitors who indicated they were interested in additional information
    getInterestedVisitor = () => {
        console.log('in getInterestedVisitor');
        axios({
            method: 'GET',
            url: '/api/admin/visitorsInterestedInMoreInfo',
        }).then((response)=>{
            console.log(response.data);
            this.setState({
                visitorsAddInfo: Number(response.data[0].count),
            })
        }).catch((error)=>{
            console.log(error, 'Error getting number of visitors interested in additional info')
        })
    }
    componentDidMount(){
        this.getInterestedVisitor();
        this.getTotalVisitors();
    }
    

    render(){
        //declaring the variable for the data that goes into the pie chart
        const data = {
            labels: [
                'Wanted Additional Info',
                'Declined Additional Info'
            ],
            datasets: [{
                data: [this.state.visitorsAddInfo, (this.state.totalVisitors - this.state.visitorsAddInfo)], // visitors who indicated they wanted add info, then the total number of visitors minus the visitors who wanted info to get the number of visitors who didn't want info
                backgroundColor: [
                '#a5d6a7',
                '#78909c'
                ],
                hoverBackgroundColor: [
                '#a5d6a7',
                '#78909c'
                ]
            }]
        };
        return(
            <div className="viewContainer"> 
                 < Pie
                    data = {data}
                    options={{
                        title: {
                            display: true,
                            text: 'Visitor Interest',
                            fontSize: 18
                        }
                    }}
                />
                <h5>{this.state.totalVisitors} total visitors</h5> {/*total visitors since database began collecting data*/}
                <h5>{((this.state.visitorsAddInfo / (this.state.totalVisitors)) * 100).toFixed(2)}% of visitors are interested in more information</h5> {/*percent interest since database began collecting data*/} 
            </div>
        );
    }
}

export default VisitorAddInfo;