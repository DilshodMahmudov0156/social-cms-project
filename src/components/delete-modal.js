import React from 'react';

function DeleteModal({openDelete, deleter}) {
    return (
        <div className="container-fluid my-modal">
            <div className="row my-row justify-content-center align-items-center">
                <div className="col-xl-4 col-md-5 col-sm-7 mb-5">
                    <div className="my-modal-content mb-5">
                        <d className="d-flex justify-content-between">
                            <h5>Do you want to delete?</h5>
                            <button className="close-btn" onClick={() => {openDelete("close")}}>
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </d>
                        <div className="d-flex mt-3">
                            <button className="cancel-btn" onClick={() => {openDelete("close")}}>Cancel</button>
                            <button className="submiter-btn" onClick={deleter}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
