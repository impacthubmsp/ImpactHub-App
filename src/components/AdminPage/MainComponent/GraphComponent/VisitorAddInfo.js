import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';



class VisitorAddInfo extends Component {
    constructor() {
        super();
        this.state = {
            visitorsAddInfo: null,
            totalVisitors: null,
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
        const data = {
            labels: [
                'Wanted Additional Info',
                'Declined Additional Info'
            ],
            datasets: [{
                data: [this.state.visitorsAddInfo, (this.state.totalVisitors - this.state.visitorsAddInfo)],
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
                <h5>{this.state.totalVisitors} total visitors</h5>
                <h5>{(this.state.visitorsAddInfo / (this.state.totalVisitors)) *100}% of visitors are interested in more information</h5>
            </div>
        );
    }
}

export default VisitorAddInfo;