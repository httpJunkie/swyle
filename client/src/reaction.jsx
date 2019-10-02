/**
 * Expected Props
 *     users: array of integers, IDs of users who have reacted
 *     type: string, type of reaction
 *     count: integer, number of current reactions of this type
 *     currentUser: Object representing a user.
 */

import React, { Component } from 'react';
import { MdThumbUp } from 'react-icons/md';
import { Mutation } from 'react-apollo';
import likePost from './mutations/like_post';
import unlikePost from './mutations/unlike_post';
import createFunny from './mutations/create_funny';
import deleteFunny from './mutations/delete_funny';
import article from './queries/article';
import image from './queries/image';


const QUERIES = { "Article": article, "ImagePost": image };
const CREATE_MUTATIONS = {'like': likePost, 'funny': createFunny}
const DELETE_MUTATIONS = {'like': unlikePost, 'funny': deleteFunny}

class Reaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        }
    }


    componentDidUpdate(newProps) {
        if (this.props.currentUser !== newProps.currentUser) {
            this.setState({ currentUser: newProps.currentUser })
        }
    }

    render() {
        const userReacted = this.state.currentUser && this.props.users.includes(this.state.currentUser.id);
        const refetch = QUERIES[this.props.type]
        return (
            <div>

            </div>
        )
    }
}

export default Reaction