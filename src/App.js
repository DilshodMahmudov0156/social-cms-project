import "./App.css"
import LoginPage from "./pages/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/protected-route";
import ProfilePage from "./pages/profile-page";
import HomePage from "./pages/home-page";
import MyModal from "./components/my-modal";
import {useEffect, useState} from "react";
import { v4 as uuidv4} from "uuid";
import UpdaterModal from "./components/updater-modal";
import DeleteModal from "./components/delete-modal";
function App() {
    const [data, setData] = useState([]);
    const [myData, setMyData] = useState([]);
    const [show, setShow] = useState(false);
    const [showUpdaterModal, setShowUpdaterModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [updateItem, setUpdateItem] = useState(null);
    const userEmail = localStorage.getItem("userEmail");
    const userId = localStorage.getItem("userId");
    const makeShow = (e, text) =>{
        e.preventDefault();
        if (text === "show"){
            setShow(true);
        } else if(text === "hide"){
            setShow(false);
        }
    }
    const showUpdater = (text, obj) => {
        if (text === "show"){
            setShowUpdaterModal(true);
            setUpdateItem({...obj});
        } else if(text === "hide"){
            setShowUpdaterModal(false);
        }
    }
    const openDelete = (text, item) => {
        if (text === "open"){
            setShowDelete(true);
            setUpdateItem(item);
        }else if(text === "close"){
            setUpdateItem(null);
            setShowDelete(false);
        }
    }
    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setMyData(data.filter(item => item.userId === userId));
            }).catch(error => {console.log(error)})
    }, []);
    const poster = async (e, obj) => {
        e.preventDefault();
        const newObj = {
            ...obj,
            id: uuidv4(),
            userId: userId,
            userEmail: userEmail
        }
        await fetch('http://localhost:3000/books', {
            method: 'POST',
            body: JSON.stringify(newObj)
        })
        setShow(false);
        window.location.reload();
    }
    const deleter = async () => {
        await fetch(`http://localhost:3000/books/${updateItem.id}`, {
            method: 'DELETE',
        })
        window.location.reload();
    }
    const updater = async (e, obj) => {
        e.preventDefault();
        await fetch(`http://localhost:3000/books/${updateItem.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })
        window.location.reload();
    }
    return (
        <div className='app'>
            {show? <MyModal makeShow={makeShow} poster={poster}/> : null}
            {showUpdaterModal? <UpdaterModal showUpdater={showUpdater} updateItem={updateItem} updater={updater}/>: null}
            {showDelete? <DeleteModal openDelete={openDelete} deleter={deleter}/>: null}

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage makeShow={makeShow} data={data}/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route
                            path="/profile"
                            element={
                            <ProfilePage
                                profile={true}
                                makeShow={makeShow}
                                data={myData}
                                openDelete={openDelete}
                                showUpdater={showUpdater}
                                updateItem={updateItem}
                            />}
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;