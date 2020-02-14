import React from 'react';

const Tooltip = props => {
    const {message, visibility} = props;
    return (
        <div className={`"tooltip-${visibility === true ? 'visible' : 'hidden'}`}>

        </div>
    )
}

export default Tooltip;