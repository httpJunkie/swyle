import React, {useEffect, useState} from 'react';
import mutation from './mutations/update_user_color_scheme';
import graphql from 'react-apollo';

const UserOptions  = (props) => {
    const [colorScheme, changeColorScheme] = useState(props.colorScheme)
    return (
        <div className="user-options">
            <form>

            </form>

        </div>
    )
}

export default graphql(mutation)(UserOptions);