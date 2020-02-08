import React from 'react';

/**
 * 
 * Expected Props
 *      errors: An array of error objects containing a "message" key at the very minimum
 *      clearErrors: A function bound to the parent component which removes errors and changes the state to no longer
 *                   be displaying the modal.  Eg, setErrors(null), this.setState({errors: null})
 */

const ErrorsModal = (props) => {
    return (
        <div className="error-modal">
            <div className="error-dialog">
                {props.errors.map(error => <span className="error-message" key={error + "isthekey"}>{error}</span>)}
                <div className="error-button-container">
                    <button className={`error-clear-btn`} onClick={props.clearErrors}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default ErrorsModal;