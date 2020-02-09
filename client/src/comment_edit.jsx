import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import updateComment from './mutations/update_comment';
import article from './queries/article';
import image from './queries/image';

/**
 * Component form for editing a user comment.  Refetches the query for which ever post it belongs to in order to update the dom
 */

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
        const refetch = this.props.postType === "Article" ? article : image
        return(
            <div className="comment">
                <Mutation mutation={updateComment}
                    update={(cache, { data: { updateComment } }) => {
                    }}
                    refetchQueries={[{ query: refetch, variables: { postId: this.props.postId} }]}
                >
                    {(updateComment, loading) =>
                        !loading ? (
                            "..."
                        ) : ( 
                    <form className="comment-edit-form" onSubmit={event => {
                                    event.preventDefault();
                                    updateComment({
                                        variables: {
                                            body: this.state.body,
                                            id: this.props.comment.id,
                                            postType: this.props.postType
                                        }
                                    }).then(res => {
                                        this.props.cancelEdit();
                                    })
                                }}>
                    <textarea className="comment-edit-body" value={this.state.body} onChange={this.handleFormChange("body")}/>
                    <div className="comment-edit-buttons">
                        <input className="confirm-btn-yes" type="submit" />
                        <button className="confirm-btn-no" onClick={this.props.cancelEdit}> Cancel</button>
                    </div>
                </form>
                            )}
                </Mutation>  
            </div>
            
        )
    }
}

export default CommentEdit;