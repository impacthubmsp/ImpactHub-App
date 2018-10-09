import React, { Component } from 'react';

class ContactRow extends Component {
    render() {
        return (
            <tr className="contactRow">
                {/*Once GET requests are complete, replace this with actual info (this.contact.property)*/}
                {/*This will display the data of each new contact as a row in a table on NewContactComponent view*/}
                <td>Kara Burnett</td>
                <td>hello_its_me@gmail.com</td>
                <td>641.000.0000</td>
                <td>No </td>
                <td><button id="addToMailList">Add to Subscription List</button></td>
            </tr>
        )
    }
}

export default ContactRow