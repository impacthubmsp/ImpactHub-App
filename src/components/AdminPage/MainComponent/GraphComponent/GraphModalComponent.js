import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import VisitorAddInfo from './VisitorAddInfo';
import GraphComponent from './GraphComponent';
import EventsMemberVSVisitor from './EventsMemberVSVisitor';
import CurrentMemberVSVistor from './CurrentMemberVSVistor'
import classNames from 'classnames';

class GraphModalComponent extends Component {

    closeAppBar = () => {
        this.props.closeAppBar()

    }

    render() {
        return (
            <div>
                <div className="modalContent">
                    <div className="subColumnHalf">
                        <div className="masonry-layout_panel">
                            <Paper className="paper">
                                <VisitorAddInfo />
                            </Paper>
                        </div>
                    </div>
                    <div className="subColumnHalf">
                        <div className="masonry-layout_panel">
                            <Paper className={classNames("paper")}>
                                <CurrentMemberVSVistor />
                            </Paper>
                        </div>
                    </div>
                </div>
                <div className="masonry-layout_panel">
                    <Paper className="paper">
                        <GraphComponent />
                    </Paper>
                </div>
                <div className="masonry-layout_panel">
                    <Paper className="paper">
                        <EventsMemberVSVisitor />
                    </Paper>
                </div>
            </div>
        );
    }
}

export default GraphModalComponent;