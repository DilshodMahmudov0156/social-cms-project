import Authorization from "../components/authorization";
import React, {useState} from "react";
import Authentication from "../components/authentication";

function LoginPage() {
    const [choosePart, setChoosePart] = useState(false);
    const switchSignUp = () => {
        setChoosePart(true);
    }
    const switchSignIn = () => {
        setChoosePart(false);
    }

    return (
        <>
            <div className="login-body">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 mt-5">
                            <div className="my-card">
                                <div className="my-card-body">
                                    <div className="d-flex">
                                        <button className={`login-part-btn mr ${choosePart? '': 'active'}`} onClick={switchSignIn}>SignIn</button>
                                        <button className={`login-part-btn ${choosePart? 'active': ''}`} onClick={switchSignUp}>SignUp</button>
                                    </div>
                                    {
                                        choosePart? <Authorization/>: <Authentication/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;