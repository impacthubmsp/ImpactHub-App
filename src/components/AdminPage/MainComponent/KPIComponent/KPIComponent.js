import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class KPIComponent extends Component {
    constructor() {
        super();
        this.state = {
            peakCheckInTimes: [],
            peakDayOfWeek: [],
            visitorQuantMonth: 10,
            visitsThisYear: '10,000',
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
                        <h4>Total Visits This Year</h4>
                        <h5>{this.state.visitsThisYear}</h5>
                    </div>
                    <div id="visitorsThisMonth" className="kpidiv">
                        <h4>Total Visits Last Month</h4>
                        <h5>{this.state.visitsLastMonth}</h5>
                    </div>
                    <div id="visitorsThisMonth" className="kpidiv">
                        <h4>Total Visits This Month</h4>
                        <h5>{this.state.visitsThisMonth}</h5>
                    </div>
                    <div>
                        <h4>Average Visits Per Day</h4>
                        <h5>This Year: {this.state.aveVisitsPerDayYear}</h5>
                        <h5>This This Month: {this.state.aveVisitsPerDayMonth}</h5>
                        <h5>Last Year: {this.state.aveVisitsPerDayLastYear}</h5>
                    </div>

                </div>
            </div>
        );
    }
}

export default KPIComponent;