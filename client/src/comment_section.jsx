import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import {Link} from 'react-router-dom';

class CommentSection extends Component {
    //Will need to refetch queries upon a successful commentation

    render () {
        return (
            <div className="comments-section">
                {this.props.comments.map(
                    comment => {
                        return <div key={comment.body} className="comment">
                            <p>{comment.body}</p>
                            <span> {`${comment.commentor.username}, on ${comment.createdAt}`}</span>
                        </div>
                    }
                )}
                 { this.props.currentUser ? 
                    <form className="comment-add">
                        <textarea placeholder="Please Enter your comment here"/>
                    </form>
                    :
                    <span>Please <Link to="/login">Log In</Link> or <Link to="register">Sign Up</Link> to post comments</span>
                }
            </div> 
        )
    }
}

export default CommentSection