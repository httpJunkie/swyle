import React, {Component} from 'react';
import NavBar from './navbar';
import logout from './mutations/logout';
import {Link} from 'react-router-dom'
import {graphql} from 'react-apollo';
import currentUser from './queries/current_user';
import HeaderSearch from './header_search';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shutUpLint: true,
            currentUser: this.props.currentUser
        }
        this.logout = this.logout.bind(this)
    }

    componentWillReceiveProps(newProps) {
        if (this.props.currentUser !== newProps.currentUser) {
            this.setState({ currentUser: newProps.currentUser})
        }
    }

    logout () {
        this.props.mutate({ 
            // refetchQueries: [{ query: currentUser }],
            update: (cache) => cache.writeQuery({
                query: currentUser,
                data: { currentUser: null },
            })
        })
            .then( res => {
            const blankToken = res.data.logout.email;
            localStorage.setItem("mlToken", blankToken);
            this.setState({ currentUser: null })
        })
    }

    render() {
        return (
            <div className="header">
                <div className="header-top" >
                    <div className="header-site-name" />
                    <HeaderSearch history={this.props.history}/>
                    {
                        !this.state.currentUser ?
                                                
                    <div className="header-session-buttons">
                        <Link to="/login" className="header-login">Login</Link>
                        <Link to="/register" className="header-register">Register</Link>
                    </div>
                    :
                            <div className="header-personal-greeting">
                                <h3>Hello, {this.state.currentUser.username || "nobody"} </h3>
                                <button className="header-login" onClick={this.logout}>Logout</button>
                            </div>
                    }
                    <div className="new-post-buttons">
                        <Link className="new-image-btn" to="/images/new"/>
                        <Link className="new-article-btn" to="/articles/new"/>
                    </div>
                </div>
                <NavBar />
            </div>
        )

    }
}

export default graphql(logout)(Header);