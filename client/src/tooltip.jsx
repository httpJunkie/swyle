import React from 'react';

const Tooltip = props => {
    const {message, visibility} = props;
    console.log(message, visibility)
    return (
        <span className={`tooltip ${visibility === true ? 'visible' : 'hidden'}`}>
            <div className="tooltip-arrow" /><span>{message}</span>
        </span>
    )
}

export default Tooltip;