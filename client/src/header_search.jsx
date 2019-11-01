import React, {useState} from 'react';
import { withRouter } from 'react-router'

const HeaderSearch = (props) => {
    const handleInputChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(props);
        debugger
        props.history.push(`/search?q=${query}`)
    }

    const [query, setQuery] = useState("");

    return (
        <form className="header-search" onSubmit={handleSubmit}>
            <input className="header-search-bar" type="text" value={query} onChange={handleInputChange}>
            </input>
            <button type="submit" className="header-search-submit" />
        </form>
    )
}

export default withRouter(HeaderSearch);

{/* <Link className="header-search-submit" to={`/search?q=${query}`} /> */}
