import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { CSVLink } from 'react-csv';
import axios from 'axios';

class CSVComponent extends Component {
    constructor() {
        super();
        this.state = {
            csvData: [],
        }
    }
    //GETs the data from the database and sets that data to state to be downloaded by CSV
    getVisitData = () => {
        console.log('in getVisitDataForCSV');
        axios({
            method: 'GET',
            url: '/api/admin/allCheckInData',
        }).then((response) => {
            console.log(response.data);
            this.setState({
                csvData: [response.data],
            })
        }).catch((error) => {
            console.log(error, 'Error getting visit data', error);
            alert('Error getting visit data');
        })
    }


    componentDidMount() {
        this.getVisitData();
    }
    render() {

        return (
            <div className="viewContainer">
                <Button> <CSVLink data={this.state.csvData} filename={"visitorData.csv"}>Download Data CSV</CSVLink></Button>
            </div>
        );
    }
}

export default CSVComponent;