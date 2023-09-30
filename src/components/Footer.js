import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

export default function Footer(){
    return <div className="footer">
        <div className="icons">
            <a href = "https://www.instagram.com/pizzahut_india/" target="_blank" rel = "noreferrer"><InstagramIcon/></a>
            <a href = "https://twitter.com/PizzaHutIN" target = "_blank" rel = "noreferrer"><TwitterIcon/></a>
            <a href ="https://www.facebook.com/dominospizzaindia/" target = "_blank" rel = "noreferrer"><FacebookIcon/></a>
            <a href = "https://www.youtube.com/channel/UCUl-rHjymc7iLfpe_1dG9WA" target = "_blank" rel = "noreferrer"><YoutubeIcon/></a>

        </div>
        <p> &copy; newtpizzeria.com </p>
    </div>
};