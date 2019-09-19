import React, {Component} from 'react';
import {MdCheck, MdClose} from 'react-icons/md';

const ConfirmationModal = (props) => {
    return (
        <div className="confirmation-modal">
            <div className="confirmation-dialog">
                <h3>Are you sure you want to delete {props.title}?</h3>
                <div style={{"display": "flex"}}>     
                    <MdCheck className="confirmation-yes" onClick={props.confirm} />
                <MdClose className="confirmation-no" onClick={props.cancel} />

                </div>
           
            </div>
        </div>
    );
}

export default ConfirmationModal;