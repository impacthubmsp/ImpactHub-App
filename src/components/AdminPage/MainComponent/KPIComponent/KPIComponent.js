import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class KPIComponent extends Component {
    constructor() {
        super();
        this.state = {
            peakCheckInTimes: [],
            peakDayOfWeek: [],
            visitorQuantMonth: 10,
            visitsThisYear: '9,852',
            visitsLastMonth: '1,125',
            visitsThisMonth: '1,002',
            aveVisitsPerDayYear: '45',
            aveVisitsPerDayMonth: '55',
            aveVisitsPerDayLastYear: '38',

        }
    }
    //getCheckIn
    componentDidMount() {

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