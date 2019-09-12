import React, {Component} from 'react';

class LikesSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            butt: true
            // currentUserLikesIt: this.props.currentUser.likes.includes(this.props.postId)
        }
    }

    render() {
        return (
            <div className="likes-section">

            </div>
        )
    }
}

export default LikesSection;