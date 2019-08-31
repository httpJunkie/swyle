import React, { Component } from 'react';
import {Mutation, Query} from 'react-apollo';
import {Link} from 'react-router-dom';
import postComment from './mutations/post_comment';
import commentsByPost from './queries/comments_by_post';

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
        return (
            <Query query={commentsByPost} variables={{postId: this.props.postId, postType: this.props.type}}>
            {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                return (
                    <div className="comments-section">
                        {data.commentsByPost.map(
                            comment => {
                                return <div key={comment.body} className="comment">
                                    <p>{comment.body}</p>
                                    <span> {`${comment.commentor.username}, on ${comment.createdAt}`}</span>
                                </div>
                            }
                        )}
                        { this.props.currentUser ? 
                            <Mutation mutation={postComment}
                                update={(cache, { data: { postComment } }) => {
                                    // const { comments } = cache.readQuery({ query: commentsByPost });
                                    // cache.writeQuery({
                                    //     query: commentsByPost,
                                    //     data: { commentsByPost: comments.concat([postComment]) },
                                    // });
                                }}
                                refetchQueries={[{ query: commentsByPost, variables: {postId: this.props.postId, postType: this.props.type} }]}
                                >     
                                {(postComment, loading) =>   
                                    !loading ? (
                                        "..."
                                    ) :  (   
                                            <form className="comment-add" onSubmit={event => {
                                                event.preventDefault();
                                                console.log(`userid: ${this.props.currentUser.id}, postId: ${this.props.postId},  postType: ${this.props.type}`)
                                                postComment({
                                                    variables: {
                                                        body: this.state.body,
                                                        userId: this.props.currentUser.id,
                                                        postId: this.props.postId,
                                                        postType: this.props.type
                                                    }
                                                }).then(res => {
                                                    this.setState({body: ""})
                                                })}}>
                                                <textarea placeholder="Please Enter your comment here" onChange={this.handleFormChange("body")} value={this.state.body}/>
                                                <input type="submit" name="Post Comment" value="Post Comment"/>
                                            </form>  
                                        ) 
                                }
    
                            </Mutation>     
                        :
                            <span>Please <Link to="/login">Log In</Link> or <Link to="register">Sign Up</Link> to post comments</span>
                        }
                    </div>
                )
            }}
            </Query>
        )
    }
}

export default CommentSection