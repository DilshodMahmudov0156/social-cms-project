import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function Authentication() {
    const [users, setUsers] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [warnUsername, setWarnUsername] = useState(false);
    const [warnPass, setWarnPass] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3006/signup')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);


    const firstGet = (e) => {
        setUsername(e.target.value)
        console.log(username)
    }
    const secondGet = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const signIn = (e) => {
        e.preventDefault();
        // const myself = users.filter(user => user.username === username);
        const checkUser = users.find(user => user.username === username && user);

        if (checkUser) {
            if (password === checkUser.password) {
                localStorage.setItem('userId', checkUser.userId);
                navigate('/profile');
                setUsername(false)
                setWarnPass(false)
            }else {
                toast.error('Your password is incorrect!')
                setWarnUsername(false)
                setWarnPass(true)
            }
        }else {
            toast.warning('There is not username like this!');
            setWarnUsername(true);
        }
    }
    return (
        <>
            <h1 className="text-center mt-3">Sign In</h1>
            <br/>
            <form onSubmit={(e)=>{signIn(e)}}>

                <label
                    htmlFor="user"
                    className={`my-2 ${warnUsername ? 'text-danger' : null}`}>
                    <b>Your username</b>
                </label>
                <input
                    type="text"
                    placeholder="Your username"
                    id="user"
                    className={warnUsername ? 'border border-danger text-danger' : null}
                    onChange={(e) => {
                    firstGet(e)
                }}/>

                <label
                    htmlFor="pass"
                    className={`my-2 mt-3 ${warnPass ? 'text-danger' : null}`}>
                    <b>Your password</b>
                </label>
                <input
                    type="password" placeholder="Your password" id="pass"
                    className={warnPass ? 'border border-danger text-danger' : null}
                    onChange={(e) => {
                    secondGet(e)
                }}/>
                <button className="submit-btn">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Authentication;