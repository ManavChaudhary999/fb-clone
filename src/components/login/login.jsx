import React from "react";

import { Button } from "@material-ui/core";
import {auth, googleProvider} from "../../firebase.js";
import "./login.css";

const Login = () => {
    const handleSignIn = ()=> {
        auth.signInWithPopup(googleProvider).catch(err => alert(err.message));
    }

    return(
        <div className="login">
            <div>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt=""/>
                <img className="text-logo" src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview-400x400.png" alt=""/>
            </div>
            <Button type="submit" onClick={handleSignIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;