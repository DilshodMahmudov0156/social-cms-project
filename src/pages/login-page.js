import React from "react";
import { auth, provider } from "../configs/FirebaseConfig";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const popupLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                localStorage.setItem("userPhoto", user.photoURL);
                localStorage.setItem("userEmail", user.email);
                localStorage.setItem("userId", user.uid);
                navigate("/profile");
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="login-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 mt-5">
                        <div className="my-card">
                            <div className="my-card-body">
                                <button className="login-btn" onClick={popupLogin}>
                                    <span>
                                        <span className="form-btn-span">
                                            <i className="bi bi-google"></i>
                                        </span>
                                        <span>Continue with Google</span>
                                    </span>
                                </button>
                                <button className="login-btn">
                                    <span>
                                        <span className="form-btn-span">
                                            <i className="bi bi-facebook"></i>
                                        </span>
                                        <span>Continue with Facebook</span>
                                    </span>
                                </button>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div className="border-div"></div>
                                    <div className="btn-between-borders">OR</div>
                                    <div className="border-div"></div>
                                </div>
                                <form>
                                    <label htmlFor="" className="my-2 mt-3">Your email</label>
                                    <input type="email" placeholder="Enter your email"/>
                                    <label htmlFor="" className="my-2">Your password</label>
                                    <input type="password" placeholder="Enter your password"/>
                                    <button className="submit-btn">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default LoginPage;