import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class CheckinPage extends Component {
  render() {
    return (
      <div>
        <Nav history={this.props.history} />
        /CHECKIN
        <div>
          Visitor Checkin Div
        </div>
        <div>
          Member Checkin Div
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default CheckinPage;
