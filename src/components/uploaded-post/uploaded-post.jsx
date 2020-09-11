import React from "react";

import ThumbupIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

import "./uploaded-post.css";
import { Avatar } from "@material-ui/core";

const UploadedPost = ({profilePic, image, username, timestamp, message})=> {
    return(
        <div className="uploaded-post">
            <div className="uploaded-post-top">
                <Avatar className="uploaded-post-avatar" src={profilePic} />
                <div className="uploaded-post-topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="uploaded-post-message">
                <p>{message}</p>
            </div>
            <div className="uploaded-post-image">
                <img src={image} alt=""/>
            </div>
            <div className="uploaded-post-options">
                <div className="uploaded-post-option">
                    <ThumbupIcon />
                    <p>Like</p>
                </div>
                <div className="uploaded-post-option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="uploaded-post-option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="uploaded-post-option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
        );
}
export default UploadedPost;