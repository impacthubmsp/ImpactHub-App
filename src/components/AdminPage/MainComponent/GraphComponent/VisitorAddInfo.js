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
            </div>
        );
    }
}

export default VisitorAddInfo;