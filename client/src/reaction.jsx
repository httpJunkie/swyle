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

}

export default Reaction