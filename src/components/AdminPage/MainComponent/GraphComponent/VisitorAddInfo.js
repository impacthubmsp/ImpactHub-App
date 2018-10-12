import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';



class VisitorAddInfo extends Component {
    constructor() {
        super();
        this.state = {
            visitorsNoAddInfo: 40,
            visitorsAddInfo: 20,
        }

    }
    
    //function to setState with result of API call here
    

    render(){
        const data = {
            labels: [
                'Wanted Additional Info',
                'Declined Additional Info'
            ],
            datasets: [{
                data: [this.state.visitorsNoAddInfo, this.state.visitorsAddInfo],
                backgroundColor: [
                '#b03060',
                '#ffd700'
                ],
                hoverBackgroundColor: [
                '#b03060',
                '#ffd700'
                ]
            }]
        };
        const dataHere = this.state.currentVisitors;
        return(
            <div>
                 < Pie
                    data = {data}
                />
            </div>
        );
    }
}

export default VisitorAddInfo;