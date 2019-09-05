import React, {Component} from 'react';

class ArticleBodyEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.body,
            id: this.props.id
        }
    }
    render(){
        return(
            <div>placeholder</div>
        )
    }
}

export default ArticleBodyEdit;