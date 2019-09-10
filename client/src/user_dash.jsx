import React, {Component} from 'react'
import {currentUser} from './queries/current_user';
import {Redirect, withRouter} from 'react-router-dom';

class UserDash extends Component {

  render() {
      if (!this.props.currentUser) {
          return (<Redirect to="/login"/>)
      } else {
          return (
              <h1>There is a user, his name is {this.props.currentUser.username}</h1>
          )
      }
  }
}

export default withRouter(UserDash);