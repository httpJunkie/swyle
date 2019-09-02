import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import updateComment from './mutations/update_comment';
import commentsByPost from './queries/comments_by_post';

class CommentEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.comment.body
        }
        this.handleFormChange = this.handleFormChange.bind(this)
    }

    handleFormChange(field) {
        return event => this.setState({
            [field]: event.currentTarget.value,
        });
    }

    render () {
        return(
            <div className="comment">
                <Mutation mutation={updateComment}
                    update={(cache, { data: { updateComment } }) => {
                    }}
                    refetchQueries={[{ query: commentsByPost, variables: { postId: this.props.postId, postType:  this.props.postType} }]}
                >
                    {(updateComment, loading) =>
                        !loading ? (
                            "..."
                        ) : ( 
                                <form style={{ "display": "flex", "width":"100%"}} onSubmit={event => {
                                    event.preventDefault();
                                    updateComment({
                                        variables: {
                                            body: this.state.body,
                                            id: this.props.comment.id
                                        }
                                    }).then(res => {
                                        this.props.cancelEdit();
                                    })
                                }}>
                    <textarea value={this.state.body} style={{"width":"100%", "height":"100%"}} onChange={this.handleFormChange("body")}/>
                    <input className="submit-or-cancel" type="submit" />
                    <button className="submit-or-cancel" onClick={this.props.cancelEdit}> Cancel</button>
                </form>
                            )}
                </Mutation>  
            </div>
            
        )
    }
}

export default CommentEdit;