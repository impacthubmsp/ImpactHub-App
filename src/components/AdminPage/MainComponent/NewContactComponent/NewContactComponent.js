import React, { Component } from 'react';
import ContactRow from './ContactRow/ContactRow.js';
import axios from 'axios';
import CSVComponent from '../CSVComponent/CSVComponent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {Typography} from '@material-ui/core';

class NewContactComponent extends Component {
    constructor() {
        super();
        this.state = {
            newContacts: [],// this array of newContacts will be populated by a GET request to the database, currently populated with dummy info to demonstrate ContactRow component is mapping correctly
        }
    }

    //componentDidMount
    componentDidMount(){
        //put things here to run on page-load
        this.getNewInfo();
    }

    //write a function to GET new contact info from database and store in local state
    getNewInfo = () => {
        axios({
            method: 'GET',
            url:'/api/visi',
        }).then((response)=>{
            console.log(response.data);
            this.setState({
                newContacts: response.data,
            })
        }).catch((error)=>{
                console.log(error, 'Error getting new contacts');
                alert('New Contacts could\'t be obtained');
        })
    }
    // write a function to GET subscription status of each new contact on component did mount

    render() {
        return (
            <div>
                <div className="viewContainer">
                    <Typography variant="h5">Visitors Seeking More Info</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* This will be where the cards with each garment will be displayed. 
                            cards will be mapped over here and will appear in a grid*/}
                            {this.state.newContacts.map((contact, i)=>{
                                return(
                                    <ContactRow key= {i} contact={contact} />// remember to pass in function here for adding a user to the subscription list so it works with the button on ContactRow Component
                                );
                            })}
                        </TableBody>
                    </Table>
                    {/* Component that allows user to download visitor data */}
                    <hr />
                    <CSVComponent />
                </div>
            </div>
        );
    }
}

export default NewContactComponent;