import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const HeaderSearch = (props) => {
    const handleInputChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        debugger
    }

    const [query, setQuery] = useState("");
    console.log(props)

    return (
        <form className="header-search" onSubmit={handleSubmit}>
            <input className="header-search-bar" type="text" value={query} onChange={handleInputChange}>
            </input>
            <button type="submit" className="header-search-submit" />
        </form>
    )
}

export default HeaderSearch;

{/* <Link className="header-search-submit" to={`/search?q=${query}`} /> */}
