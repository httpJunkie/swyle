import React, { Component } from 'react';
import {Mutation, Query} from 'react-apollo';
import {Link} from 'react-router-dom';
import postComment from './mutations/post_comment';

class CommentSection extends Component {
    //Will need to refetch queries upon a successful commentation

    constructor(props) {
        super(props)
        this.state = {
            body: null
        }
        this.postComment = this.postComment.bind(this)
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(field) {
        return event => this.setState({
            [field]: event.currentTarget.value,
        });
    }

    postComment() {
        console.log("Pingas")
    }

    render () {
        // Simple Refactor: wrap the comments in a query, for getting comments by post id, be sure to use type as well.
        // if Article, Article.find(:id).comments easy peasy duck soup chonmage
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
               
                    <form className="comment-add" onSubmit={this.postComment}>
                        <textarea placeholder="Please Enter your comment here" onChange={this.handleFormChange("body")}/>
                        <input type="submit" name="Post Comment" value="Post Comment"/>
                     </form>         
                   :
                    <span>Please <Link to="/login">Log In</Link> or <Link to="register">Sign Up</Link> to post comments</span>
                }
            </div> 
        )
    }
}

export default CommentSection