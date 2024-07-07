import React from 'react';
import NavBar from "../components/nav-bar";
import Card from "../components/card";

function HomePage({profile, data}) {
    return (
        <div className="home">
            <NavBar/>
            <div className="container my-content">
                <div className="d-flex justify-content-between align-items-center mt-5 px-4">
                    <div className="texts">
                        <h2 className="header-text">There are <span className="quantity">{data.length} book{data.length > 1? "s": null}</span></h2>
                    </div>
                </div>
                <div className="row px-4">
                    {
                        data.map(item => (
                            <Card profile={profile} book={item}/>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default HomePage;