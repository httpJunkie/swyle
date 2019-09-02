import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import updateComment from './mutations/update_comment';

class CommentEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.body
        }
    }

    render () {
        return(
            <div className="comment">
                <form>
                <textarea value={this.state.body}/>
                <input type="submit" />
                <button onClick={this.props.cancelEdit}> Cancel</button>
            </form>
            </div>
            
        )
    }
}

export default CommentEdit;