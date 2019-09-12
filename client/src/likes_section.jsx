import React, {Component} from 'react';

class LikesSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUserLikesIt: this.props.currentUser ? this.props.likers.includes(this.props.currentUser.id) : false
        }
    }

    render() {
        return (
            <div className="likes-section" style={{"color":"white"}}>
              { this.state.currentUserLikesIt ? "You like this" : "You have no opinion on this"}
            </div>
        )
    }
}

export default LikesSection;