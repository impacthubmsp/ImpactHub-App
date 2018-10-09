import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Phone from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const styles = theme => ({
});


class CheckinPage extends Component {
  state = {
    marginTop: '8',
  };

  render() {
    const { classes } = this.props;
    // const { spacing } = this.state;

    return (
      <div>
        <Nav history={this.props.history} />
        <Grid container spacing={0}>
          {/* Visitor's section */}
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <div>
              {/* Form for visitors */}
              <div>
                <div>
                  Are you a visitor?
                </div>
                {/* Visitor Enter name */}
                <div className={classes.margin}>
                  <List component="nav">
                    <ListItem>
                      <TextField
                        id="input-with-icon-textfield"
                        label="Full Name"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem divider>
                      {/* Visitor Select Purpose */}
                      <div>
                        <Button variant="contained">
                          One
                        </Button>
                        <Button variant="contained">
                          Two
                        </Button>
                        <Button variant="contained">
                          Three
                        </Button>
                        <Button variant="contained">
                          Four
                        </Button>
                      </div>
                    </ListItem>
                    {/* Select Interest in membership */}
                    <ListItem divider>
                      {/* Checkbox for selecting interest */}
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="true"
                          />
                        }
                        label="Secondary"
                      />
                      {/* Accompanying text for selecting interest */}
                      <ListItemText primary="Are you interested in more information about membership options?" />
                    </ListItem>
                    {/* Enter email address for interest */}
                    <ListItem divider>
                      <TextField
                        id="filled-email-input"
                        label="Email Address"
                        type="email"
                        name="email"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AlternateEmail />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </ListItem>
                     {/* Enter phone number for interest */}
                     <ListItem divider>
                      <TextField
                        id="filled-email-input"
                        label="Phone Number"
                        type="phone"
                        name="phone"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Phone />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </ListItem>
                  </List>

                </div>
              </div>
              {/* the variant 'contained' switches the color of the background and text */}
              <Button variant="contained" color="primary">
                Submit
                </Button>
            </div>
          </Grid>
          {/* Members's section */}
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <div>
              {/* form for members */}
              <div>
                <div>
                  Member Login
                </div>
              </div>
              {/* the variant 'contained' switches the color of the background and text */}
              <Button variant="contained" color="secondary">
                Submit
                </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CheckinPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// this allows us to use <App /> in index.js
export default withStyles(styles)(CheckinPage);
