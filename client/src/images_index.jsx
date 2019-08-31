import React, { Component } from 'react';
import images from './queries/images';
import { Query } from "react-apollo";
import ArticleTags from './article_tags';
import {Link} from 'react-router-dom';

class ImagesIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Query query={images}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return (
                        <div className="image-index-page">
                            {data.images.map(image =>
                                  {return (
                                      <div className="image-index-card" 
                                      key={`${image.title}${image.author.username}`}>
                                          <Link to={`/images/${image.id}`}>
                                           <img className="image-index-thumb"src={image.image} alt={image.title} />
                                          </Link>
                                          <span>by {image.author.username}</span>
                                          <span>{image.count} Comments, 0 Likes</span>
                                      </div>
                                  )
                                      
                                  }   
                            )}
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default ImagesIndex;