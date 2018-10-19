import React, { Component } from 'react';

class ContactRow extends Component {
    render() {
        return (
            <tr className="contactRow">
                {/*Once GET requests are complete, replace this with actual info (this.contact.property)*/}
                {/*This will display the data of each new contact as a row in a table on NewContactComponent view*/}
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.email}</td>
                <td>{this.props.contact.phone}</td>
            </tr>
        )
    }
}

export default ContactRow