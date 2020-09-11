import React, {useState, useEffect} from "react";

import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Feed from "./components/feed/feed.jsx";
import Widgets from "./components/widgets/widgets.jsx";
import Login from "./components/login/login.jsx";

import {auth} from "./firebase.js";
import UserContext from "./user.context.js";

import "./App.css";

const App = ()=> {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) { // if user login
                console.log(userAuth);
                setUser(userAuth);
            //     const userRef = await createUserProfileDocument(userAuth);
            //     userRef.onSnapshot(snapShot => {
            //     setUser({
            //       id: snapShot.id,
            //       ...snapShot.data()
            //     });
            //   })
            }
            else{ // if user logs out
                setUser(null);
            }
          });
      
        return() => {
            unsubscribe();
        }
    },[user]);

    return(
        <div className="app">
            <UserContext.Provider value={user}>
            {!user ? <Login />
                :
            <>
                <Header />
                <div className="app-body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            </>
            }
            </UserContext.Provider>
        </div>
    )
};

export default App;