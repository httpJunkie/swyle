import React, {Component} from 'react';
import { MdThumbUp, MdThumbDown} from 'react-icons/md';
import {Mutation} from 'react-apollo';
import likePost from './mutations/like_post';

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
        return (
            <div className="likes-section" style={{"color":"white"}}>
                <div className="like-or-dislike">
                   
                        <Mutation 
                            mutation={likePost}
                            update={(cache, { data: { likePost } }) => {
                            }}>
                            {(likePost, loading) =>
                                !loading ? (
                                    "..."
                                ) : (
                                <span> 
                                  <MdThumbUp className={userLikesIt ? "like-thumb-yes" : "like-thumb-no"} 
                                            onClick={event => {
                                                event.preventDefault();
                                                likePost({
                                                    variables: {
                                                        userId: this.state.currentUser.id,
                                                        postId: this.props.postId,
                                                        postType: this.props.type
                                                    }
                                                }).then(res => {
                                                    debugger;
                                                    // this.setState({ body: "" })
                                                })
                                            }}
                                  /> 
                                  {this.props.numLikes}
                                </span>
                                )}     
                        </Mutation>
                   
                </div>
            </div>
        )
    }
}

export default LikesSection;