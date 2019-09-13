import React, {Component} from 'react';
import { MdThumbUp, MdThumbDown} from 'react-icons/md';
import {Mutation} from 'react-apollo';
import likePost from './mutations/like_post';
import article from './queries/article';
import unlikePost from './mutations/unlike_post';

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
        console.log(this.props.likers)
        return (
            <div className="likes-section" style={{"color":"white"}}>
                <div className="like-or-dislike">
                       {  userLikesIt ?
                        <Mutation
                            mutation={unlikePost}
                            refetchQueries={[{ query: article, variables: { id: this.props.postId, } }]}
                            update={(cache, { data: { unlikePost } }) => {
                            }}>
                            {(unlikePost, loading) =>
                                !loading ? (
                                    "..."
                                ) : (
                                        <span>
                                            <MdThumbUp className="like-thumb-yes"
                                                onClick={event => {
                                                    event.preventDefault();
                                                    unlikePost({
                                                        variables: {
                                                            userId: this.state.currentUser.id,
                                                            postId: this.props.postId,
                                                            postType: this.props.type
                                                        }
                                                    }).then(res => {
                                                        // this.setState({ body: "" })
                                                    })

                                                }}
                                            />
                                            {this.props.numLikes}
                                        </span>
                                    )}
                        </Mutation>
                           :                    
                        <Mutation 
                            mutation={likePost}
                        refetchQueries={[{ query: article, variables: { id: this.props.postId,}}]}
                            update={(cache, { data: { likePost } }) => {
                            }}>
                            {(likePost, loading) =>
                                !loading ? (
                                    "..."
                                ) : (
                                <span> 
                                  <MdThumbUp className="like-thumb-no" 
                                            onClick={event => {
                                                event.preventDefault();
                                                likePost({
                                                    variables: {
                                                        userId: this.state.currentUser.id,
                                                        postId: this.props.postId,
                                                        postType: this.props.type
                                                    }
                                                }).then(res => {
                                                    // this.setState({ body: "" })
                                                })
                                           
                                            }}
                                  /> 
                                  {this.props.numLikes}
                                </span>
                                )}     
                        </Mutation>
                       }
                </div>
            </div>
        )
    }
}

export default LikesSection;