import React from "react";
import insta_Icon from "../assets/images/icons/insta_icon.svg";
import github_Icon from "../assets/images/icons/github_icon.svg";
import linkedin_Icon from "../assets/images/icons/linkedin_icon.svg";
import wpp_Icon from "../assets/images/icons/wpp_icon.svg";

import "./social.css"

const Social = () => {


    return (
        <div className="div-social">
            <a><img src={ insta_Icon } /></a>
            <a><img src={ github_Icon } /></a>
            <a><img src={ linkedin_Icon } /></a>
            <a><img src={ wpp_Icon } /></a>
        </div>
    );
}

export default Social;
