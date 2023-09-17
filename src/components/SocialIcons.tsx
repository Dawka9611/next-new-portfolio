"use client"
import styled from "styled-components";
import { BsFillShareFill, BsFacebook, BsInstagram, BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import React, { useState } from 'react';

const iconsData = [
    { icon: BsFacebook, url: 'https://www.facebook.com/dawka.ulziihutag/', color: '#1877f2' },
    { icon: BsInstagram, url: 'https://www.instagram.com/stories/u.daavka/3192407640664065679/', color: "#c32aa3" },
    { icon: BsGithub, url: 'https://github.com/Dawka9611', color: "#075e54" },
    { icon: BsLinkedin, url: 'https://www.linkedin.com/in/dawaadulam-ulziihutag-84b224284/', color: "#25d366" },
    // { icon: BsTwitter, url: 'https://www.twitter.com/', color: "#1da1f2" },
    // { icon: BsYoutube, url: 'https://www.youtube.com/', color: "#ff0000" },
];

const SocialIcons = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <IconsStyle className="relative flex  box-border  z-100">
            <div className="toggle relative bg-white flex justify-center items-center text-gray-800 cursor-pointer text-2xl" onClick={handleClick}>
                <BsFillShareFill className="icon" />
            </div>
            {
                iconsData.map((el, ind) => (
                    // ${toggle ? `icon${ind + 1}` : ""}
                    toggle && <li color={el.color} key={ind} className={`absolute list-none hover:scale-200 z-30`}
                        style={{
                            transform: `rotate(${ind * (-180 / iconsData.length)}deg) translateY(-30px) translateX(-60px)`, transitionDelay: `0.05s * ${ind}`
                        }}>
                        <a href={el.url} target="_blank" style={{ color: el.color, transform: `rotate(${ind * (-180 / -iconsData.length)}deg)`, width: "40px", height: "40px" }} className="anchor relative flex text-2xl justify-center items-center bg-white rounded-full hover:scale- z-30">
                            {React.createElement(el.icon)}
                        </a>
                    </li>
                ))
            }
        </IconsStyle>
    );
};
export default SocialIcons;

const IconsStyle = styled.div`
  width: 60px;
  height: 60px;
  .toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    transition: 1.25s;
    &:hover{
        transform: rotate(360deg);
        box-shadow: 0 6px 8px rgba(0,0,0,0.15), 0 0 0 2px #333, 0 0 0 8px #0f9ca1;
    }
    li{
        transition: 0.5s;
        transform-origin: 30px;
        &:hover{
        box-shadow: 0 6px 8px rgba(0,0,0,0.15), 0 0 0 2px #333, 0 0 0 8px #0f9ca1;
    }
    }
    .anchor{

    }
  }
`;