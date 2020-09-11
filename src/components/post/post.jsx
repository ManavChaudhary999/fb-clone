import React, {useState, useContext} from "react";
import firebase from "firebase";

import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import "./post.css";
import {db} from "../../firebase.js";
import UserContext from "../../user.context";

const Post = ()=> {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const user = useContext(UserContext);

    const handleSubmit = (e)=> {
        e.preventDefault();
        db.collection('post').add({
            username: user.displayName,
            profilePic: user.photoURL,
            image: imageUrl,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
        setImageUrl('');
    }

    return(
        <div className="post">
            <div className="post-top">
                <Avatar src={user.photoURL} />
                <form>
                    <input className="form-input" type="text" placeholder="What's on your mind?" onChange={e => setInput(e.target.value)} value={input} />
                    <input placeholder="image url(optional)" onChange={e => setImageUrl(e.target.value)} value={imageUrl} />
                    <button type="submit" onClick={handleSubmit}>
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="post-bottom">
                <div className="post-option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="post-option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="post-option">
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default Post;