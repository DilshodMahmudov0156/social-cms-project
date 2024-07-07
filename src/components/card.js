import React from 'react';
import "../positon.css";

function Card({ profile, book, openDelete, showUpdater }) {
    return (
        <div className="col-xl-4 card-out" key={book.id}>
            <div className="book-card shadow-lg">
                <h5>{book.name}</h5>
                <p className="">Cover: <a href="">{book.cover}</a></p>
                <p>Pages: {book.pages}</p>
                <p>Published: {book.published}</p>
                <p>Isbn: {book.isbn}</p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <p>{book.author} / {book.published}</p>
                    <button className="new-btn">New</button>
                </div>
                {
                    profile ?
                        <div className="edit-delete">
                            <button className="btn-top" onClick={() => {
                                openDelete("open", book);
                            }}>
                                <i className="bi bi-trash"></i>
                            </button>
                            <button
                                className="btn-bottom"
                                onClick={() => {
                                showUpdater("show", book)
                            }}>
                                <i className="bi bi-pencil-square"></i>
                            </button>
                        </div> :
                        null
                }
            </div>
        </div>
    );
}

export default Card;