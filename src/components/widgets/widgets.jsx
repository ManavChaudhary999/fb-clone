import React from "react";

import "./widgets.css";

const Widgets = () => {
    return(
        <div className="widgets">
            <iframe src="https://www.youtube.com/embed?v=hoNb6HuNmU0&pbjreload=101" 
                width="340"
                height="100%"
                style={{border: "none", overflow: "hidden"}}
                scrolling="no"
                >
                </iframe>
        </div>
    );
}

export default Widgets;