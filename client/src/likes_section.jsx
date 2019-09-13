import React, {Component} from 'react';
import { MdThumbUp, MdThumbDown} from 'react-icons/md';

class LikesSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        }
    }


    componentWillReceiveProps(newProps) {
        if (this.props.currentUser !== newProps.currentUser) {
            this.setState({currentUser: newProps.currentUser})
        }
    }

    render() {
        const userLikesIt = this.state.currentUser && this.props.likers.includes(this.state.currentUser.id);
        return (
            <div className="likes-section" style={{"color":"white"}}>
                <div className="like-or-dislike">
                    <span> <MdThumbUp className={userLikesIt ? "like-thumb-yes" : "like-thumb-no"} /> {this.props.numLikes}</span>
                </div>
            </div>
        )
    }
}

export default LikesSection;