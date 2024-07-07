import React, {useState} from 'react';

function MyModal({makeShow, poster}) {

    const [name, setName] = useState("");
    const [cover, setCover] = useState("");
    const [pages, setPages] = useState("");
    const [published, setPublished] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");

    return (
        <div className="my-modal container-fluid">
            <div className="row my-row justify-content-center align-items-center">
                <div className="col-xl-4 col-md-5 col-sm-7">
                    <form className="my-modal-content">
                        <div className="d-flex justify-content-between">
                            <h5 className="modal-text">Create a book</h5>
                            <button className="close-btn" onClick={(e) => {makeShow(e, "hide")}}>
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </div>
                        <b>Name:</b>
                        <input type="text" placeholder="Book name ..." className="" onChange={(e) => {setName(e.target.value)}}/>
                        <b className="mt-1 d-block">Cover:</b>
                        <input type="text" placeholder="___________" className="" onChange={(e) => {setCover(e.target.value)}}/>
                        <b className="mt-1 d-block">Pages:</b>
                        <input type="number" placeholder="Quantity of pages..." className="" onChange={(e) => {setPages(e.target.value)}}/>
                        <b className="mt-1 d-block">Published:</b>
                        <input type="number" placeholder="Published year/" className="" onChange={(e) => {setPublished(e.target.value)}}/>
                        <b className="mt-1 d-block">ISBN:</b>
                        <input type="number" placeholder="___________" className="" onChange={(e) => {setIsbn(e.target.value)}}/>
                        <b className="mt-1 d-block">Author:</b>
                        <input type="text" placeholder="Who did make it?" className="" onChange={(e) => {setAuthor(e.target.value)}}/>
                        <div className="d-flex justify-content-between mt-3">
                            <button className="cancel-btn"  onClick={(e) => {makeShow(e, "hide")}}>Cancel</button>
                            <button
                                className="submiter-btn"
                                type="submit"
                                onClick={(e) => {
                                    poster(e,{
                                        name: name,
                                        cover: cover,
                                        pages: pages,
                                        published: published,
                                        isbn: isbn,
                                        author: author
                                    })
                                }}>
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyModal;