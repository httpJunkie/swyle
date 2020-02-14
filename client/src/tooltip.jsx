import React from 'react';

const Tooltip = props => {
    const {message, visibility} = props;
    console.log(message, visibility)
    return (
        <div className={`tooltip ${visibility === true ? 'visible' : 'hidden'}`}>
            <span>{message}</span>
        </div>
    )
}

export default Tooltip;