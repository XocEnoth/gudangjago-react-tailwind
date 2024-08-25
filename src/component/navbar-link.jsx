import React, { useState } from "react";

function navbarLink(props) {
    const [isScrolled, setIsScrolled] = useState(false);

    const onScroll = () => {
        if (
            (window.scrollY > props.scrollMin &&
                window.scrollY < props.scrollMax) ||
            window.scrollY == props.scrollTop
        ) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    window.addEventListener("scroll", onScroll);

    return (
        <>
            <button
                onClick={props.onClick}
                className={`${
                    isScrolled ? "text-navbar-hover" : "text-navbar-text"
                } font-opensans text-15 leading-6 font-normal pl-7.5 py-2.5 uppercase hover:text-navbar-hover ease-in-out duration-300 h-42.5 cursor-pointer`}
            >
                {props.text}
            </button>
        </>
    );
}

export default navbarLink;
