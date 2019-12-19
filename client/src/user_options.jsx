import React, {useEffect, useState} from 'react';
import mutation from './mutations/update_user_color_scheme';
import graphql from 'react-apollo';

const UserOptions  = (props) => {
    return (
        <div className="user-options">

        </div>
    )
}

export default graphql(mutation)(UserOptions);