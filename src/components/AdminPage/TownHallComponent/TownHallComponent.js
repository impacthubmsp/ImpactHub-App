import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText';



class TownHallComponent extends Component {
    constructor() {
        super();

        // This will store the user that is selected from the drop-down menu.
        //Whis will be used for axios request.
        this.state = {
            single: '',
            purpose: null,
            day: null,
            time: null,
            checked_in: true,
            membersCheckedIn: []
        }
        this.baseState = this.state 
    }


    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_MEMBERS'})
        this.getCheckedIn()
    }

    handleChange = name => async value => {
        await this.setState({
          [name]: value,
          day: moment().format("L"),
          time: moment().format("LTS")
        });
        if(this.state.single === null || this.state.single === ''){
            this.resetForm()
        }else{
            this.checkStatus(this.state.single.value)
        }
      };

       //change checked in to status of user if they are already checked if not then button will remain checked-in
        //based on user selected we will compare it to members that are checked in
        //if user is checked in button will changed to checkout 
        //if user is not checked in button will remain checked in

      getCheckedIn() {
        axios.get('/api/memb/townhall')
        .then((response) =>{
          console.log(response.data); 
          this.setState({
              membersCheckedIn: response.data
          })  
        }).catch((error)=>{
            console.log('error', error);
        })
    }

    // This function will be carried into the UsernameComponent, and will be called to update the current user when one is selected from the dropdown.
    render() {

        
        return (
                <div className="viewContainer">
                    {/* list of members currently present */}
                    <div id="townHallContainer">
                        <div>
                            <h4>Town Hall</h4>
                        </div>
                            <List component="nav">
                                {/* Component for selecting name & drop-down menu */}
                                {this.state.membersCheckedIn.map((member, i)=>{
                                    return(<ListItem key={i}><Avatar style={{width:'60px', height:'60px'}}><img className="avatar" src={member.img_url} alt="profile"/></Avatar> <ListItemText primary={member.name} secondary={member.company} /></ListItem>)
                                })
                                }
                            </List>
                    </div>
                </div>
        )
    }
}

// this allows us to use <App /> in index.js
export default connect() (TownHallComponent);