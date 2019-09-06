import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import updateArticleBody from './mutations/update_article_body'

class ArticleBodyEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.body,
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
                <Mutation mutation={updateArticleBody}
                    update={(cache, { data: { updateArticleBody } }) => {
                    }}
                    refetchQueries={[{ query: article, variables: { id: this.props.id } }]}

                >{(updateComment, loading) =>
                    !loading ? (
                        "..."
                    ) : (
                            <form style={{ "display": "flex", "width": "100%" }} onSubmit={event => {
                                event.preventDefault();
                                updateArticleBody({
                                    variables: {
                                        body: this.state.body,
                                        id: this.props.id
                                    }
                                }).then(res => {
                                    this.props.cancelEdit();
                                })
                            }}>
                            </form>
                        )}
                </Mutation>

            </div>
        )
    }
}

export default ArticleBodyEdit;