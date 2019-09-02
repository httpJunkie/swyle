import React, { Component } from 'react';
import { Query } from 'react-apollo';
import image from './queries/image';
import CommentSection from './comment_section';
import {Link} from 'react-router-dom';

class ImageShow extends Component {

    render() {
        const argument = parseInt(this.props.match.params.imageID)
        return (
            <Query query={image} variables={{ id: argument }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    const image = data.image;
                    const ownIndex = data.imageIds.indexOf(image.id)
                    const next = ownIndex === data.imageIds.length - 1 ? data.imageIds[0] : data.imageIds[ownIndex + 1];
                    const prev = ownIndex === 0 ? (data.imageIds[data.imageIds.length - 1]) : data.imageIds[ownIndex - 1];
                    return (
                        <div className="article-show-page">
                            <div style={{"flexDirection": "row", "display": "flex"}}>
                                <Link className="image-show-carousel" to={`/images/${prev}`}>Previous</Link>
                                <div style={{ "flexDirection": "column", "display": "flex"}}>
                                    
                                    <img className="image-show-image" src={image.image}/>
                                    <h4 className="image-show-title">{image.title}, by {image.author.username}</h4>
                                    <p>{image.description}</p>
                              </div>
                                <Link className="image-show-carousel" to={`/images/${next}`}>Next</Link>
                            </div>     
                        <CommentSection type={"ImagePost"} currentUser={data.currentUser} postId={argument} />
                        </div>
                    )
                }}
            </Query>
        )
    }

}

export default ImageShow;