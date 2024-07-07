import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    const [users, setUsers] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();

    const firstGet = (e) => {
        setUsername(e.target.value)
        console.log(username)
    }
    const secondGet = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }
    const thirdGet = (e) => {
        setConfirm(e.target.value)
        console.log(confirm)
    }

    const signUp = (e) => {
        e.preventDefault();
        users.find(item => item.username !== username)
        console.log(users);
    }
    return (
        <div className="login-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 mt-5">
                        <div className="my-card">
                            <div className="my-card-body">
                                <h1 className="text-center">Sign up</h1>
                                <br/>
                                <form onSubmit={(e) => {
                                    signUp(e)
                                }}>
                                    <label htmlFor="user" className="my-2 mt-3">Your email</label>
                                    <input type="" placeholder="Set username" id="user" onChange={(e)=>{firstGet(e)}}/>
                                    <label htmlFor="pass" className="my-2 mt-3">Your password</label>
                                    <input type="password" placeholder="Enter your password" id="pass" onChange={(e)=>{secondGet(e)}}/>
                                    <label htmlFor="confirm" className="my-2 mt-3">Confirm password</label>
                                    <input type="password" placeholder="Enter your confirm password" id="confirm" onChange={(e)=>{thirdGet(e)}}/>
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