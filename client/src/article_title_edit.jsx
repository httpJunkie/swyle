import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import updateArticleTitle from './mutations/update_article_title'
import article from './queries/article';

class ArticleTitleEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            id: this.props.id
        }
        this.handleFormChange = this.handleFormChange.bind(this)
    }

    handleFormChange(field) {
        return event => this.setState({
            [field]: event.currentTarget.value,
        });
    }

    render() {
        return (
            <div>
                <Mutation mutation={updateArticleTitle}
                    update={(cache, { data: { updateArticleTitle } }) => {
                    }}
                    refetchQueries={[{ query: article, variables: { id: this.props.id} }]}
                
                >{(updateComment, loading) =>
                    !loading ? (
                        "..."
                    ) : ( 
                        <form style={{ "display": "flex", "width": "100%" }} onSubmit={event => {
                            event.preventDefault();
                            updateArticleTitle({
                                variables: {
                                    title: this.state.title,
                                    id: this.props.id
                                }
                            }).then(res => {
                                this.props.finishEdit("Title");
                            })
                        }}>
                            <button onClick={this.props.cancelEdit} name="Title">Cancel</button>
                        </form>
                    )}
                </Mutation>
            
            </div>
        )
    }
}

export default ArticleTitleEdit;