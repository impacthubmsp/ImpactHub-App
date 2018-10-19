import React, { Component } from 'react';
import ContactRow from './ContactRow/ContactRow.js';
import axios from 'axios';

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
                    <h3>Visitors Seeking More Info</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* This will be where the cards with each garment will be displayed. 
                            cards will be mapped over here and will appear in a grid*/}
                            {this.state.newContacts.map((contact, i)=>{
                                return(
                                    <ContactRow key= {i} contact={contact} /> // remember to pass in function here for adding a user to the subscription list so it works with the button on ContactRow Component
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NewContactComponent;