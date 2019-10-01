import React, { Component } from 'react';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import { Mutation } from 'react-apollo';
import createFunny from './mutations/create_funny';
import article from './queries/article';
import image from './queries/image';
import deleteFunny from './mutations/delete_funny';

const QUERIES = { "Article": article, "ImagePost": image };

class FunnyCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        }
    }


    componentWillReceiveProps(newProps) {
        if (this.props.currentUser !== newProps.currentUser) {
            this.setState({ currentUser: newProps.currentUser })
        }
    }

    render() {
        const userAlreadyLaughed = this.state.currentUser && this.props.laughers.includes(this.state.currentUser.id);
        const refetch = QUERIES[this.props.type]
        return (
            <div className="likes-section" style={{ "color": "white" }}>
                <div className="like-or-dislike">
                    {userAlreadyLaughed ?
                        <Mutation
                            mutation={deleteFunny}
                            refetchQueries={[{ query: refetch, variables: { id: this.props.postId, } }]}
                            update={(cache, { data: { deleteFunny } }) => {
                            }}>
                            {(deleteFunny, loading) =>
                                !loading ? (
                                    "..."
                                ) : (
                                        <span>
                                            <MdThumbUp className="like-thumb-yes"
                                                onClick={event => {
                                                    event.preventDefault();
                                                    if (!this.state.currentUser) {
                                                        return false;
                                                    }
                                                    deleteFunny({
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
                            mutation={createFunny}
                            refetchQueries={[{ query: refetch, variables: { id: this.props.postId, } }]}
                            update={(cache, { data: { createFunny } }) => {
                            }}>
                            {(createFunny, loading) =>
                                !loading ? (
                                    "..."
                                ) : (
                                        <span>
                                            <MdThumbUp className="like-thumb-no"
                                                onClick={event => {
                                                    event.preventDefault();
                                                    if (!this.state.currentUser) {
                                                        alert("Find this funny? Log in to have it persist!")
                                                        return false;
                                                    }
                                                    createFunny({
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

export default FunnyCounter;