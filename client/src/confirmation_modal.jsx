import React, {Component} from 'react';

const ConfirmationModal = (props) => {
    return (
        <div className="confirmation-modal">
            <div className="confirmation-form">
                <h3>Are you sure you want to delete {props.title}?</h3>
            </div>
        </div>
    );
}

export default ConfirmationModal;