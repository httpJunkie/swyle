import React, {Component} from 'react';

class LikesSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        }
    }

    componentDidUpdate(newProps) {
        debugger
    }

    render() {
        return (
            <div className="likes-section" style={{"color":"white"}}>
                {this.state.currentUser && this.props.likers.includes(this.state.currentUser.id)  ? "You like this" : "You have no opinion on this"}
            </div>
        )
    }
}

export default LikesSection;