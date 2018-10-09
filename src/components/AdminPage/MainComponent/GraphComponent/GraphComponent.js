import React, { Component } from 'react';

class GraphComponent extends Component {
  render() {
      return (
        <div>
          <div className="viewContainer">
            {/*This component will show the attendance data as  line charts - stacked area from chart.js. There will be options to show different timespans, but default will be today by hour */}
            <img src="https://via.placeholder.com/500x300?text=Graph+Component" alt="graph" />
          </div>
        </div>
      );
  }
}

export default GraphComponent;

