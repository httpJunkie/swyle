import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const HeaderSearch = () => {
    const handleInputChange = e => {
        setQuery(e.target.value)
    }

    const [query, setQuery] = useState("");
    console.log(query);

    return (
        <form className="header-search">
            <input className="header-search-bar" type="text" value={query} onChange={handleInputChange}>
            </input>
            <Link className="header-search-submit" to={`/search?q=${query}`}/>
        </form>
    )
}

export default HeaderSearch;