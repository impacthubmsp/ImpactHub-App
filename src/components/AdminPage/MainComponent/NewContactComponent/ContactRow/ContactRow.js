import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class ContactRow extends Component {
    render() {
        return (
            <TableRow className="contactRow">
                {/*Once GET requests are complete, replace this with actual info (this.contact.property)*/}
                {/*This will display the data of each new contact as a row in a table on NewContactComponent view*/}
                <TableCell>{this.props.contact.name}</TableCell>
                <TableCell>{this.props.contact.email}</TableCell>
                <TableCell>{this.props.contact.phone}</TableCell>
            </TableRow>
        )
    }
}

export default ContactRow