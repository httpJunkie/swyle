import React, {useEffect, useState} from 'react';
import mutation from './mutations/update_user_color_scheme';
import {graphql} from 'react-apollo';

const UserOptions  = (props) => {
    const [colorScheme, changeColorScheme] = useState(props.colorScheme)
    return (
        <div className="user-options">
            <div className="user-option">
                <h4>Color Scheme</h4>
                <span className={colorScheme === "standard" ? "option-selected" : "option-unselected"}>Classic</span>
                <span className={colorScheme === "red" ? "option-selected" : "option-unselected"}>Radical Red</span>
                <span className={colorScheme === "green" ? "option-selected" : "option-unselected"}>Groovy Green</span>
            </div>

        </div>
    )
}

export default graphql(mutation)(UserOptions);