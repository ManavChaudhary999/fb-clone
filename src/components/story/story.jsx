import React from "react";

import "./story.css";
import { Avatar } from "@material-ui/core";

const Story = ({image, profileSrc, title}) => {
    return(
        <div className="story"
            style={{backgroundImage: `url(${image})`}}>
            <Avatar className="story-avatar" src={profileSrc} />
            <h4 className="story-h4">{title}</h4>
        </div>
    );
}

export default Story;