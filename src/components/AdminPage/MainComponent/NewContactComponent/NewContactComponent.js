import React, { Component } from 'react';
import ContactRow from './ContactRow/ContactRow.js';

class NewContactComponent extends Component {
    constructor() {
        super();
        this.state = {
            newContacts: ['contact', 'contact'], // this array of newContacts will be populated by a GET request to the database, currently populated with dummy info to demonstrate ContactRow component is mapping correctly
        }
    }

    //write a function to GET new contact info from database and store in local state

    // write a function to GET subscription status of each new contact on component did mount

    // write a function to POST new subscriber to mailChimp on addToMailList button click


    render() {
        return (
            <div>
                <div className="viewContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kara Burnett</td>
                                <td>hello_its_me@gmail.com</td>
                                <td>641.000.0000</td>
                            </tr>
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