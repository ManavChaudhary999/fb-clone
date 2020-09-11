import React, {useContext} from "react";

import "./storyreel.css";
import Story from "../story/story.jsx";
import UserContext from "../../user.context";

const StoryReel = () => {
       const user = useContext(UserContext);
       return(
              <div className="story-reel">
                     <Story image="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_ghostrunner_02_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen"
                            profileSrc={user.photoURL} title={user.displayName} />
                     <Story image="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_crew_2_01_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen" 
                            profileSrc="" title="Seth" />
                     <Story image="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_crew_2_01_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen" 
                            profileSrc="" title="Seth" />
                     <Story image="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_crew_2_01_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen" 
                            profileSrc="" title="Seth" />
                     <Story image="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_crew_2_01_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen" 
                            profileSrc="" title="Seth" />
                     <Story image="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_crew_2_01_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen" 
                            profileSrc="" title="Seth" />
              </div>
       );
}

export default StoryReel;