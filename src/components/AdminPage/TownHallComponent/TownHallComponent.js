import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText';

const members = [];

function getMembers() {
    axios.get('/api/memb/list')
    .then((response) =>{
        let member = response.data;
        member.map((member)=>{
            members.push({
                label: <ListItem><Avatar style={{width:'60px', height:'60px'}}><img className="avatar" src={member.img_url}/></Avatar> <ListItemText primary={member.name} secondary={member.company} /></ListItem> ,
                value: member.cobot_id + member.name
            })
            return members;
           })
    })
}

// get list of member array and their checked-in status

members.map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
  }));



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
        getMembers()
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
        axios.get('/api/memb/checkedin')
        .then((response) =>{
          console.log(response.data); 
          this.setState({
              membersCheckedIn: response.data
          })  
        }).catch((error)=>{
            console.log('error', error);
        })
    }

    //check if the person selected is already check in if not then check_in will be toggled to activate checkout button

    checkStatus (selectedMember) {
        console.log('in selectedMember', selectedMember);
        for(let user of this.state.membersCheckedIn){
            let combineUserInfo = `${user.cobot_id}${user.name}`;
            if(combineUserInfo === selectedMember){
                this.setState({
                    checked_in: false
                })
            }
            else{
                this.setState({
                    checked_in: true
                })
            }
        }
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
                                {members.map((member, i)=>{
                                    return(<ListItem key={i}><Avatar style={{width:'60px', height:'60px'}}><img className="avatar" src={member.img_url}/></Avatar> <ListItemText primary={member.name} secondary={member.company} /></ListItem>)
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