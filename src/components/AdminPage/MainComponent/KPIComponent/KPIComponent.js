import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

class KPIComponent extends Component {
    constructor() {
        super();
        this.state = {
            visitsThisYear: '9,852',
            visitsLastMonth: '1,125',
            visitsThisMonth: '1,002',
            aveVisitsPerDayYear: '45',
            aveVisitsPerDayMonth: '55',
            aveVisitsPerDayLastYear: '38',

        }
    }
    //GET VisitorsThisMonth
    getVisitorsThisMonth = () => {
        console.log('in getVisitsThisMonth');
        axios({
            method: 'GET',
            url:'/api/admin/visitsThisMonth',
        }).then((response)=>{
            console.log(response.data.sum);
            this.setState({
                visitsThisMonth: Number(response.data[0].sum),
            })
        }).catch((error)=> {
            console.log(error, 'Error getting visits this month', error);
            alert ('Error getting visits this month');
        })
    }
    //GET Visits This Year
    getVisitsThisYear = () => {
        console.log('in getVisitsThisYear');
        axios({
            method: 'GET',
            url:'/api/admin/visitsThisYear',
        }).then((response)=>{
            console.log(response.data.sum);
            this.setState({
                visitsThisYear: Number(response.data[0].sum),
            })
        }).catch((error)=> {
            console.log(error, 'Error getting visits this year', error);
            alert ('Error getting visits this year');
        })
    }
    //GET visits last month
    getVisitsLastMonth = () => {
        console.log('in getVisitsLastMonth');
        axios({
            method: 'GET',
            url:'/api/admin/visitsLastMonth',
        }).then((response)=>{
            console.log(response.data.sum);
            this.setState({
                visitsLastMonth: Number(response.data[0].sum),
            })
        }).catch((error)=> {
            console.log(error, 'Error getting visits last month', error);
            alert ('Error getting visits last month');
        })
    }
    //GET visits this month
    getVisitsThisMonth = () => {
        console.log('in getVisitsThisMonth');
        axios({
            method: 'GET',
            url:'/api/admin/visitsThisMonth',
        }).then((response)=>{
            console.log(response.data.sum);
            this.setState({
                visitsThisMonth: Number(response.data[0].sum),
            })
        }).catch((error)=> {
            console.log(error, 'Error getting visits this month', error);
            alert ('Error getting visits this month');
        })
    }
    //GET ave visits per day this year
    getAveVisitsPerDayThisTear = () => {
        console.log('in getAveVisitsPerDayThisYear');
        axios({
            method: 'GET',
            url:'/api/admin/AveVisitsPerDayThisYear',
        }).then((response)=>{
            console.log(response.data.sum);
            this.setState({
                aveVisitsPerDayYear: Number(response.data[0].sum),
            })
        }).catch((error)=> {
            console.log(error, 'Error getting ave visits per day this year', error);
            alert ('Error getting ave visits per day this year');
        })
    }
    //GET ave visits per day this month
    getAveVisitsPerDayThisMonth = () => {
        console.log('in getVisitsLastMonth');
        axios({
            method: 'GET',
            url:'/api/admin/aveVisitsPerDayThisMonth',
        }).then((response)=>{
            console.log(response.data.sum);
            this.setState({
                aveVisitsPerDayMonth: Number(response.data[0].sum),
            })
        }).catch((error)=> {
            console.log(error, 'Error getting ave visits per day last month', error);
            alert ('Error getting ave visits per day last month');
        })
    }
    //GET ave visits per day last year
    getAveVisitsPerDayLastYear = () => {
        console.log('in getVisitsLastMonth');
        axios({
            method: 'GET',
            url:'/api/admin/aveVisitsPerDayLastYear',
        }).then((response)=>{
            console.log(response.data.sum);
            this.setState({
                aveVisitsPerDayLastYear: Number(response.data[0].sum),
            })
        }).catch((error)=> {
            console.log(error, 'Error getting ave visits per day last year', error);
            alert ('Error getting average visits per day last year');
        })
    }

    componentDidMount() {
        this.getVisitorsThisMonth();
        this.getVisitsThisYear();
        this.getVisitsLastMonth();

    }
    render() {


        return (
            <div>
                <div className="dashboardContainer">
                    <div style={{ marginBottom: '20px', marginTop: '10px' }}>
                        <Typography variant="h5">Visitor Insights</Typography>
                    </div>
                    <hr style={{ marginTop: '15px', marginBottom: '10px' }} />
                    <div id="visitorsThisMonth" className="kpidiv">
                        <Typography variant="h6">Total Visits This Year</Typography>
                        <h4>{this.state.visitsThisYear}</h4>
                    </div>
                    <div id="visitorsThisMonth" className="kpidiv">
                        <Typography variant="h6">Total Visits Last Month</Typography>
                        <h4>{this.state.visitsLastMonth}</h4>
                    </div>
                    <div id="visitorsThisMonth" className="kpidiv">
                        <Typography variant="h6">Total Visits This Month</Typography>
                        <h4>{this.state.visitsThisMonth}</h4>
                    </div>
                    <div>
                        <Typography variant="h6">Average Visits Per Day</Typography>
                        <h4>This Year: {this.state.aveVisitsPerDayYear}</h4>
                        <h4>This This Month: {this.state.aveVisitsPerDayMonth}</h4>
                        <h4>Last Year: {this.state.aveVisitsPerDayLastYear}</h4>
                    </div>

                </div>
            </div>
        );
    }
}

export default KPIComponent;