import React, { Component } from 'react';
import { Query } from 'react-apollo';
import image from './queries/image';
import CommentSection from './comment_section';
import ImageDescriptionEdit from './image_description_edit';
import ImageTitleEdit from './image_title_edit';
import {Link} from 'react-router-dom';
import $ from 'jquery';


class ImageShow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editingTitle: false,
            editingDescription: false
        }
        this.cancelEdit = this.cancelEdit.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
        this.editField = this.editField.bind(this);
    }

    cancelEdit(event) {
        $('body').css('overflow', 'auto');
        this.setState({ [`editing${event.target.name}`]: false })
    }

    finishEdit(field) {
        $('body').css('overflow', 'auto');
        this.setState({ [`editing${field}`]: false })
    }

    editField(event) {
        event.preventDefault();
        this.setState({ [`editing${event.target.id}`]: true });
    }

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
                                    <h2 className="image-show-title">                                        
                                      {image.author.id === data.currentUser.id && 
                                      <span className="comment-edit-btn" onClick={this.editField} name="Title" id="Title" />}
                                      {image.title}, by {image.author.username}</h2>
                                    <p className="image-show-description">"{image.description}"</p>
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