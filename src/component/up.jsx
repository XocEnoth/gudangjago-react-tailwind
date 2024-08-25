import React, { useState } from "react";

function up() {
    const [isScroll90, setIsScroll] = useState(false);

    window.onscroll = () => {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    const top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div
                className={`${
                    isScroll90 ? "opacity-100 visible" : "opacity-0 invisible"
                } w-10 h-10 bg-navbar-hover rounded-4 cursor-pointer flex justify-center items-center hover:bg-btnUp-hover fixed z-10 right-15 bottom-15 ease-linear duration-200`}
                onClick={top}
            >
                <i className="bi bi-arrow-up-short text-28 text-white"></i>
            </div>
        </>
    );
}

export default up;
