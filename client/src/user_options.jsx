import React, {useEffect, useState} from 'react';
import mutation from './mutations/update_user_color_scheme';
import {graphql} from 'react-apollo';

const UserOptions  = (props) => {
    const [colorScheme, changeColorScheme] = useState(props.colorScheme)

    const handleClick = (event) => {
        changeColorScheme(event.target.getAttribute("name"))
        console.log(props)
        props.mutate({ variables:{id: props.userId, colorScheme: colorScheme}}).then( res => {
         debugger;
         })
    }
    return (
        <div className="user-options">
            <div className="user-option">
                <h4>Color Scheme</h4>
                <div onClick={handleClick} name="standard" className={colorScheme === "standard" ? "option option-selected" : "option option-unselected"}>Classic</div>
                <div onClick={handleClick} name="red" className={colorScheme === "red" ? "option option-selected" : "option option-unselected"}>Radical Red</div>
                <div onClick={handleClick} name="green" className={colorScheme === "green" ? "option option-selected" : "option option-unselected"}>Groovy Green</div>
            </div>

        </div>
    )
}

export default graphql(mutation)(UserOptions);