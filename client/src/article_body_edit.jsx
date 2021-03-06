/**
 * Edit form for the body of an article
 */
/* eslint no-restricted-globals: 0 */  // --> OFF
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
        this.bodyEditHeight = document.getElementById("article-body").offsetHeight;
    }

    /**
     * Changes a specific value within state depending on which field is being manipulated
     * @param {*} field 
     */
    handleFormChange(field) {
        return event =>
          this.setState({
             [field]: event.currentTarget.value
            //[field]: event.target.value
          });
    }

    render() {

        return (
          <div className="edit-body">
            <Mutation
              mutation={updateArticleBody}
              update={(cache, { data: { updateArticleBody } }) => {}}
              refetchQueries={[
                { query: article, variables: { id: this.props.id } }
              ]}
            >
              {(updateArticleBody, loading) =>
                !loading ? (
                  "..."
                ) : (
                  <form
                    className="edit-body"
                    onSubmit={event => {
                      event.preventDefault();
                      updateArticleBody({
                        variables: {
                          body: this.state.body,
                          id: this.props.id
                        }
                      }).then(res => {
                        this.props.finishEdit("Body");
                      });
                    }}
                  >
                    <textarea
                      type="textarea"
                      className="edit-body-textarea"
                      wrap="hard"
                      cols="40"
                      onChange={this.handleFormChange("body")}
                      value={this.state.body}
                      style={{ height: `${this.bodyEditHeight}px` }}
                    />
                    <span className="edit-save-or-cancel">
                      <input
                        type="submit"
                        value="Save"
                        className="confirm-btn-yes"
                        name="Save"
                      />
                      <button
                        onClick={this.props.cancelEdit}
                        className="confirm-btn-no"
                      >
                        Cancel
                      </button>
                    </span>
                  </form>
                )
              }
            </Mutation>
          </div>
        );
    }
}
//                      
export default ArticleBodyEdit;

/**
 *  
 */