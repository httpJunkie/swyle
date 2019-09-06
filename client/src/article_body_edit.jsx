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
    }
    render() {
        return (
            <div>
                <Mutation mutation={updateArticleTitle}
                    update={(cache, { data: { updateArticleTitle } }) => {
                    }}
                    refetchQueries={[{ query: article, variables: { id: this.props.id } }]}

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