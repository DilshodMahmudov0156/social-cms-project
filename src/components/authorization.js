import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {v4, v4 as uuidv4} from "uuid";

function Authorization(props) {

    const [users, setUsers] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [warnPass, setWarnPass] = useState(false);
    const [warnConfirm, setWarnConfirm] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3006/signup')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

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

    const logger = () => {
        console.log()
    }

    const signUp = (e) => {
        e.preventDefault();
        const checkUsername = users.find(user => user.username === username && user);
        if (!username || !password || !confirm){
            toast.error('Fill all gaps!')
        }
        if(username && password && confirm){
            if (confirm === password){
                if(!checkUsername){
                    const newObj = {
                        id: v4(),
                        userId: v4(),
                        username: username,
                        password: password
                    }
                    fetch('http://localhost:3006/signup', {
                        method: 'POST',
                        body: JSON.stringify(newObj)
                    })
                    localStorage.setItem('userId', newObj.userId);
                    setWarnPass(false);
                    setWarnConfirm(false);
                    toast.success('You Auhorized successfuly');
                    navigate('/profile')
                }else {
                    toast.warning('This username is busy!')
                }
            }else {
                toast.error('Your confirm password is incorrect!');
                setWarnConfirm(true);
            }
        }
    }
    return (
    <>
        <h1 className="text-center mt-3">Sign up</h1>
        <br/>
        <form onSubmit={(e) => {
            signUp(e)
        }}>
            <label htmlFor="user" className="my-2">Enter username</label>
            <input type="" placeholder="Set username" id="user" onChange={(e) => {
                firstGet(e)
            }}/>
            <label htmlFor="pass" className={`my-2 mt-3 ${warnPass ? 'text-danger' : null}`}>Your password</label>
            <input type="password" placeholder="Enter your password" id="pass"
                   className={warnPass ? 'border border-danger' : null} onChange={(e) => {
                secondGet(e)
            }}/>
            <label htmlFor="confirm" className={`my-2 mt-3 ${warnConfirm ? 'text-danger' : null}`}>Confirm
                password</label>
            <input type="password" placeholder="Enter your confirm password" id="confirm"
                   className={warnConfirm ? 'border border-danger' : null} onChange={(e) => {
                thirdGet(e)
            }}/>
            <button className="submit-btn">
                Submit
            </button>
        </form>
    </>
)
    ;
}

export default Authorization;