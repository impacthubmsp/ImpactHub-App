import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {CSVLink} from 'react-csv';

class CSVComponent extends Component {
    constructor() {
        super();
        this.state = {
            csvData: [
                ['firstname', 'lastname', 'email'] ,
                ['Ahmed', 'Tomi' , 'ah@smthing.co.com'] ,
                ['Raed', 'Labes' , 'rl@smthing.co.com'] ,
                ['Yezzi','Min l3b', 'ymin@cocococo.com']
              ],
        }
    }

    getVisitData = () => {
        //axios request to database to get visitor data from database
    }
    
    componentDidMount() {
        //get visitor data from database
    }
    render() {
        const csvData = this.state.csvData;

        return (
            <div className="viewContainer">
                <Button> <CSVLink data={csvData} filename={"visitorData.csv"}>Download Data CSV</CSVLink></Button>
            </div>
        );
    }
}

export default CSVComponent;