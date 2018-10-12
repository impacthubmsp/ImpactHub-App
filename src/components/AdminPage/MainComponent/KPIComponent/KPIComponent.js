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
    componentDidMount(){
        
    }
    render(){
            
    
        return(
            <div>
                <div className="dashboardContainer">
                    <div id="peakCheckInTimes" className="kpidiv">

                    </div>
                    <div id="peakCheckInDayOfWeek">

                    </div>
                    <div id="peakFrequency" className="kpidiv">
                        <h3>Peak Frequency</h3>
                        <h4>This Week:</h4>
                        <h4>This Month:</h4>
                    </div>
                    <div id="visitorsThisMonth" className="kpidiv">
                        <h3>Visitors This Month</h3>
                        <h4>{this.state.visitorQuantMonth}</h4>
                    </div>
                    <div id="visitorsThisMonthMoreInfo" className="kpidiv">
                        <h3>Visitors Seeking More Info</h3>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default KPIComponent;