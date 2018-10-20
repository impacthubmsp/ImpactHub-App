import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import MainComponent from './MainComponent/MainComponent'

class AdminPage extends Component {

  render() {

    return (
      <div>

        <Nav history={this.props.history} />
          <MainComponent />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default AdminPage;

