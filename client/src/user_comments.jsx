import React from 'react';
import commentsByUser from './queries/comments_by_user';
import { Query } from 'react-apollo';


const UserComments = (props) => {
    return (
        <div className="user-comments">
            <Query query={commentsByUser} variables={{ userId: props.userId }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error </p>;
                    return (
                        <div>
                            {data.commentsByUser.map(comment => {
                                return (
                                    <div className="user-comments-card" key={`${comment.id}`}>
                                        <h4>You commented:</h4>
                                        <p className="user-comments-card-body">"{comment.body}"</p>
                                        <h5> <span>
                                            On <span>{comment.post.title}</span> by <span>{comment.post.author.username}</span>
                                            <span> at {comment.createdAt}</span>
                                        </span> </h5>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

export default UserComments;