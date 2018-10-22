import React, { Component } from 'react';

class KPIComponent extends Component {
    constructor() {
        super();
        this.state = {
            peakCheckInTimes: [],
            peakDayOfWeek: [],
            visitorQuantMonth: 10,

        }
    }
    //getCheckIn
    componentDidMount() {

    }
    render() {


        return (
            <div>
                <div className="dashboardContainer">
                    <div id="visitorsThisMonth" className="kpidiv">
                        <h3>Visitors This Month</h3>
                        <h4>{this.state.visitorQuantMonth}</h4>
                    </div>
                    <div id="visitorsThisMonth" className="kpidiv">
                        <h3>Visitors Last Month</h3>
                        <h4>{this.state.visitorQuantMonth}</h4>
                    </div>
                    <div id="visitorsThisMonth" className="kpidiv">
                        <h3>Visitors This Year</h3>
                        <h4>{this.state.visitorQuantMonth}</h4>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        );
    }
}

export default KPIComponent;