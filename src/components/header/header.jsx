import React, {useContext} from "react";

import { Avatar, IconButton, Button } from "@material-ui/core";
import SearchIcon from"@material-ui/icons/Search";
import HomeIcon from"@material-ui/icons/Home";
import FlagIcon from"@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from"@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from"@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from"@material-ui/icons/SupervisedUserCircle";
import AddIcon from"@material-ui/icons/Add";
import ForumIcon from"@material-ui/icons/Forum";
import NotificationsActiveIcon from"@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from"@material-ui/icons/ExpandMore";

import UserContext from "../../user.context";
import {auth} from "../../firebase.js";

import "./header.css";

const Header = ()=> {
    const user = useContext(UserContext);
    return(
        <div className="header">
            <div className="header-left">
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt=""/>
            </div>
            <div className="header-input">
                <SearchIcon />
                <input type="text"/>
            </div>
            <div className="header-center">
                <div className="header-option option-active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header-right">
                <div className="header-info">
                    <div className="button-avatar">
                    <Avatar src={user.photoURL} />
                    <Button className="button-logout" onClick={()=> auth.signOut()}>Logout</Button>
                    </div>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
};

export default Header;