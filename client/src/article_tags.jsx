import React from 'react';

const ArticleTags = (props) => {
    return (
        <span className="article-card-tags">{props.tags.map( tag => <span>{`#${tag} `}</span>)}</span>
    )
}

export default ArticleTags;