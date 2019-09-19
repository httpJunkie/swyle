import React, {Component} from 'react';

const ConfirmationModal = (props) => {
    return (
        <div className="confirmation-modal">
            <div className="confirmation-form">
                <h3>Are you sure you want to delete {props.title}?</h3>
                <button onClick={props.confirm}>OK</button>
                <button onClick={props.cancel}>Cancel</button>
            </div>
        </div>
    );
}

export default ConfirmationModal;