import React, { Component } from 'react';

class NewContactComponent extends Component {
    render() {
        return (
            <div>
                <div className="viewContainer">
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Contact Status</th>
                            <th>Contact</th>
                        </thead>
                        <tr>
                            <td>Kara Burnett</td>
                            <td>hello_its_me@gmail.com</td>
                            <td>641.000.0000</td>
                            <td>No</td>
                            <td><button>Send Welcome Email</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default NewContactComponent;