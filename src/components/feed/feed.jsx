import React, { useEffect, useState } from "react";

import "./feed.css";
import StoryReel from "../storyreel/storyreel.jsx";
import Post from "../post/post.jsx";
import UploadedPost from "../uploaded-post/uploaded-post";
import {db} from "../../firebase.js";

const Feed = ()=> {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        db.collection('post').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})
            ))
        ))
    },[posts]);

    return(
        <div className="feed">
            <StoryReel className="feed-story" />
            <Post />
            {posts.map(({id, data}) => (
                <UploadedPost
                key={id}
                profilePic={data.profilePic}
                image={data.image}
                message={data.message}
                timestamp={data.timestamp}
                username={data.username}
                />
            ))}
        </div>
    );
}

export default Feed;