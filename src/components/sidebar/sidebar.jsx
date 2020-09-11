import React, {useContext} from "react";

import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import "./sidebar.css";
import SidebarRow from "../sidebar-row/sidebar-row";
import UserContext from "../../user.context";

const Sidebar = () => {
    const user = useContext(UserContext);
    return(
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Informationn Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontOutlinedIcon} title="MarketPlace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreSharpIcon} title="More" />
        </div>
    )
};

export default Sidebar;