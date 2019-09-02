import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import comments from './queries/comments_by_post';
import deleteComment from './mutations/delete_comment';
import CommentEdit from './comment_edit';

class Comment extends Component {

    constructor(props){
        super(props);
        this.state = {
            editing: false
        }
    }

    render() {
        if (this.state.editing) {
            return < CommentEdit body={this.props.body} />
        } else {
            return (
                <div key={this.props.comment.body} className="comment" style={this.props.commentStyle}>
                    <div style={{ "display": "flex", "flexDirection": "column" }}>
                        <p className="comment-body">{this.props.comment.body}</p>
                        <span className="comment-who-and-when"> {`${this.props.comment.commentor.username}, on ${this.props.comment.createdAt}`}</span>
                    </div>
                    <div>
                        {(this.props.currentUser.id === this.props.comment.commentor.id) && <span>Edit</span>}
                        {(this.props.currentUser.id === this.props.comment.commentor.id || this.props.currentUser.id === this.props.articleAuthorId) && <span>Delete</span>}
                    </div>

                </div>
            )
        }
    }

}

export default Comment;