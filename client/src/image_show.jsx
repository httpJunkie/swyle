import React, { Component } from 'react';
import { Query } from 'react-apollo';
import image from './queries/image';
import CommentSection from './comment_section';

class ImageShow extends Component {

    render() {
        const argument = parseInt(this.props.match.params.imageID)
        return (
            <Query query={image} variables={{ id: argument }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    const image = data.image;
                    console.log(data.image)
                    return (
                        <div className="article-show-page">
                            <h1>{image.title}</h1>
                            <img src={image.image}/>
                            <p>{image.description}</p>
                            <CommentSection type={"Image"} currentUser={data.currentUser} postId={argument} />
                        </div>
                    )
                }}
            </Query>
        )
    }

}

export default ImageShow;