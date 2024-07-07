import React, {useState} from 'react';

function UpdaterModal({ showUpdater, updater, updateItem }) {

    const [name, setName] = useState(updateItem.name);
    const [cover, setCover] = useState(updateItem.cover);
    const [pages, setPages] = useState(updateItem.pages);
    const [published, setPublished] = useState(updateItem.published);
    const [isbn, setIsbn] = useState(updateItem.isbn);
    const [author, setAuthor] = useState(updateItem.author);


    return (
        <div className="my-modal">
            <div className="row my-row justify-content-center align-items-center">
                <div className="col-xl-4 col-md-5 col-sm-7">
                    <div className="my-modal-content">
                        <div className="d-flex justify-content-between">
                            <h5 className="modal-text">Update the book</h5>
                            <button className="close-btn" onClick={() => {
                                showUpdater("hide")
                            }}>
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </div>
                        <form onSubmit={(e) => {
                            updater(e, {
                                ...updateItem,
                                name: name,
                                cover: cover,
                                pages: pages,
                                published: published,
                                isbn: isbn,
                                author: author
                            });
                        }}>
                            <b>Name of the book:</b>
                            <input type="text" value={name} onChange={(e) => {
                                setName(e.target.value)
                            }}/>
                            <b className="mt-2">Cover:</b>
                            <input type="text" value={cover} onChange={(e) => {
                                setCover(e.target.value)
                            }}/>
                            <b className="mt-2">Quantity of pages:</b>
                            <input type="number" value={pages} onChange={(e) => {
                                setPages(e.target.value)
                            }}/>
                            <b className="mt-2">Published year:</b>
                            <input type="number" value={published} onChange={(e) => {
                                setPublished(e.target.value)
                            }}/>
                            <b className="mt-2">ISBN</b>
                            <input type="number" value={isbn} onChange={(e) => {
                                setIsbn(e.target.value)
                            }}/>
                            <b className="mt-2">Author name:</b>
                            <input type="text" value={author} onChange={(e) => {
                                setAuthor(e.target.value)
                            }}/>
                            <div className="d-flex justify-content-between mt-3">
                                <button className="cancel-btn" onClick={() => {
                                    showUpdater("hide")
                                }}>Cancel
                                </button>
                                <button className="submiter-btn">
                                    Change
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdaterModal;