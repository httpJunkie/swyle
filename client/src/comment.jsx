import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import comments from './queries/comments_by_post';
import deleteComment from './mutations/delete_comment';
import CommentEdit from './comment_edit';
import $ from 'jquery';

class Comment extends Component {

    constructor(props){
        super(props);
        this.state = {
            editing: false
        }

        this.cancelEdit = this.cancelEdit.bind(this)
        this.editComment = this.editComment.bind(this);
    }

    editComment () {
        this.setState({editing: true})
    }

    cancelEdit () {
        this.setState({editing: false})
    }

    render() {
        if (this.state.editing) {
            return < CommentEdit body={this.props.body} cancelEdit={this.cancelEdit}/>
        } else {
            return (
                <div key={this.props.comment.body} className="comment" style={this.props.commentStyle}>
                    <div style={{ "display": "flex", "flexDirection": "column" }}>
                        <p className="comment-body">{this.props.comment.body}</p>
                        <span className="comment-who-and-when"> {`${this.props.comment.commentor.username}, on ${this.props.comment.createdAt}`}</span>
                    </div>
                    <div>
                        {(this.props.currentUser.id === this.props.comment.commentor.id) && <span className="comment-edit-btn" onClick={this.editComment}/>}
                        {(this.props.currentUser.id === this.props.comment.commentor.id || this.props.currentUser.id === this.props.articleAuthorId) && <span className="comment-delete-btn" />}
                    </div>

                </div>
            )
        }
    }

}

export default Comment;