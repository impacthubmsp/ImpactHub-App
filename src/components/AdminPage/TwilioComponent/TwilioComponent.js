import React, { Component } from 'react';
import axios from "axios";

class TwilioComponent extends Component {

    sendTwilio = () => {
        console.log('sendTwilio');
        // axios.get('/api/memb/list')
        //     .then((response) => {
        //         let member = response.data;
        //         member.map((member) => {
        //             members.push({
        //                 label: <span><img className="avatar" src={member.img_url} />  {member.name} <br /> {member.company}</span>,
        //                 value: member.cobot_id + member.name
        //             })
        //             return members;
        //         })
        //     })
    }

    render() {
        return (
            <div>
                Twilio
          <form onSubmit={this.sendTwilio}>
                    <input type="text" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default TwilioComponent;

