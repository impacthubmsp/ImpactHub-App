import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';



class CurrentMemberVSVisitor extends Component {
    constructor() {
        super();
        this.state = {
            currentVisitors: 10,
            currentMembers: 20,
        }

    }
    
    
    //function to setState with result of API call here

    render(){
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
        const dataHere = this.state.currentVisitors;
        return(
            <div>
                {dataHere && < Pie
                    data = {data}
                />}
            </div>
        );
    }
}

export default CurrentMemberVSVisitor;