import React, {useState} from 'react';
import { withRouter } from 'react-router'
import { FaSearch} from 'react-icons/fa';

const HeaderSearch = (props) => {
    const handleInputChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.history.push(`/search?q=${query}`)
    }

    const [query, setQuery] = useState("");

    return (
        <form className="header-search" onSubmit={handleSubmit}>
            <input className="header-search-bar" type="text" value={query} onChange={handleInputChange}>
            </input>
            <button type="submit" className="header-search-submit"> <FaSearch /></button>
        </form>
    )
}

export default withRouter(HeaderSearch);
