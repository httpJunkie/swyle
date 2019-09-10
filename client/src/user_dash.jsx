import React, {Component} from 'react'
import {currentUser} from './queries/current_user';
import {Redirect, withRouter} from 'react-router-dom';

class UserDash extends Component {


    constructor(props) {
        super(props)
        this.state={currentUser: this.props.currentUser}
    }

  componentWillReceiveProps(newProps) {
      if (this.props.currentUser !== newProps.currentUser) {
          this.setState({currentUser: newProps.currentUser})
      }
  }

  render() {
      if (!this.state.currentUser) {
          return (<Redirect to="/login"/>)
      } else {
          return (
              <div className="user-dashboard">

                <div className="user-recent-activity">

                    <div className="user-posts">

                    </div>

                    <div className="user-comments">
                        
                    </div>

                </div>

              </div>
          )
      }
  }
}

export default withRouter(UserDash);