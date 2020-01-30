import React from 'react';

const PostCard = (props) => {
    const {colorScheme, post} = props;
    return (
        <div className={`post-card ${colorScheme}`} key={`${post.title}${post.id}`}>
            <h3 >{post.title}</h3>
            {post.image && <div className="post-thumbnail-container"><img src={post.image} alt={post.image.title} /> </div>}
            {post.snippet && <p>{post.snippet}<span style={{ "color": "gray" }}>...</span></p>}
        </div>
    )
}

export default PostCard;