import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import MainComponent from './MainComponent/MainComponent'
import TwilioComponent from './TwilioComponent/TwilioComponent'

class AdminPage extends Component {

  render() {

    return (
      <div>

        <Nav history={this.props.history} />
        /ADMIN
          <TwilioComponent />
          {/* <MainComponent /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default AdminPage;

