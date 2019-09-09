import React, { Component } from 'react';
import postImage from './mutations/post_image';
import currentUser from './queries/current_user';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import gql from 'graphql-tag';
import moment from 'moment';

class ArticleCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: ""
        }
        this.handleFormChange = this.handleFormChange.bind(this)
        this.save = this.save.bind(this)
    }


    handleFormChange(field) {
        return event => this.setState({
            [field]: event.currentTarget.value,
        });
    }

    async save(e) {
        e.preventDefault();
        const image = this.state.image;
        const response = await this.props.s3Sign({
            variables: {
                filename: this.formatFilename(image.name),
                filetype: image.type
            }
        });
        const { signedRequest, url } = response.data.signS3;
        await this.uploadToS3(image, signedRequest)
        this.props.mutate({
            variables: {
                title: this.state.title,
                description: this.state.description,
                image: url
            }
        }).then(res => {
            this.props.history.push(`/images/${res.data.createImagePost.id}`)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.save}>
                    <input className="image-input"
                        type="file"
                        onChange={this.handleFileChange}
                        accept="image/png, image/jpeg, image/gif, image/bmp, image/jpg"
                    />
                    <input className="image-text-field" type="text" onChange={this.handleFormChange("title")} placeholder="Image Title" value={this.state.title} />
                    <input className="image-text-field" type="text" onChange={this.handleFormChange("description")} placeholder="Description (optional)" value={this.state.description} />
                    <input type="submit" className="submit" value="Post Image" disabled={!this.state.image} />
                </form>
            </div>
        )
    }
}



export default compose(
    graphql(currentUser)
)(
    graphql(postImage)(ArticleCreate)
)