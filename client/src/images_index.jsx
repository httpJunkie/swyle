import React, { Component } from 'react';
import articles from './queries/articles';
import { Query } from "react-apollo";
import ArticleTags from './article_tags';

class ImagesIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const date = Date.now();
        return (
            <Query query={articles}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return (
                        <div className="article-index-page">
                            <div className="article-index-card" >
                                <h2 className="article-index-title">Placeholder</h2>
                                <p className="article-index-snippet">
                                    Here, all posts with images will be indexed
                                </p>
                            </div>
                            <div className="image-index-card" > 
                                <img style={{"width":"40rem"}}src="https://i.imgur.com/Y1XJZy0.jpg"/>
                                <p>This is a lovely road in the hills near Quincy, Massachusetts.  </p>
                            </div>
                            <div className="image-index-card" >
                                <img style={{ "width": "40rem" }} src="https://peopledotcom.files.wordpress.com/2019/05/prince-harry-d.jpg?crop=510px%2C63px%2C869px%2C869px&resize=1200%2C1200" />
                                <p>I just Swyl'd about Harry  </p>
                                <ArticleTags tags={["lookAtThisTag", "othertag"]} />
                                <h4>0 Comments 0 Likes</h4>  
                            </div>
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default ImagesIndex;