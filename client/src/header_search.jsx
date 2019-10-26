import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const HeaderSearch = () => {
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    
    const [query, setQuery] = useState("");

    return (
        <form className="header-search">
            <input className="header-search-bar" type="text">
            </input>
            <Link className="header-search-submit" to={`/search?q=${query}`}/>
        </form>
    )
}

export default HeaderSearch;