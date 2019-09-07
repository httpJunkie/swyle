import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import updateArticleBody from './mutations/update_article_body'
import article from './queries/article';

class ArticleBodyEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.body,
            id: this.props.id
        }
        this.handleFormChange = this.handleFormChange.bind(this)
        //TODO: Adapt the code below.
        //this.bioEditHeight = document.getElementById("char-bio").offsetHeight;
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
                                    this.props.finishEdit("Body");
                                })
                            }}>
                                <input type="textarea" value={this.state.body}></input>
                            <button onClick={this.props.cancelEdit} name="Body">Cancel</button>
                            </form>
                        )}
                </Mutation>

            </div>
        )
    }
}

export default ArticleBodyEdit;