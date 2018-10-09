import React, { Component } from 'react';

class NewContactComponent extends Component {
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
                                <th>Subscribed on MailChimp?</th>
                                <th>Add to the Mailing List</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kara Burnett</td>
                                <td>hello_its_me@gmail.com</td>
                                <td>641.000.0000</td>
                                <td>No </td>
                                <td><button>Add to Subscription List</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NewContactComponent;