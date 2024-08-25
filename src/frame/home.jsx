import React, { useState } from "react";

const home = () => {
    const [isHomeVisible, setIsHomeVisible] = useState(true);
    const [isHomeRemoved, setIsHomeRemoved] = useState(false);

    const buttonClick = () => {
        setIsHomeVisible(false);

        setTimeout(() => {
            setIsHomeRemoved(true);
        }, 500);
        window.scrollTo({ top: 15, behavior: "smooth" });
    };

    return (
        <div
            className={`${
                isHomeVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-in-out w-full h-screen fixed z-50 bg-gradient-to-b from-home-top to-home-bottom items-center justify-center`}
            style={{ display: isHomeRemoved ? "none" : "flex" }}
        >
            <div>
                <div className="w-full flex justify-center mb-8">
                    <a href="index.html">
                        <img
                            src="hero-logo.png"
                            alt="hero"
                            width="133px"
                            className="cursor-pointer animate-opacityChange"
                        />
                    </a>
                </div>

                <h1 className="text-white font-montserrat font-medium text-5xl text-center mb-8">
                    Welcome
                </h1>

                <h2 className="text-home-gray font-montserrat font-normal text-sm text-center uppercase mb-8">
                    IT Solution for Your Bussiness
                </h2>

                <div className="w-full flex justify-center">
                    <a
                        className="bg-home-link rounded-3 text-white cursor-pointer font-montserrat text-base font-normal tracking-wider py-3.5 px-7.5 text-center uppercase m-2 ease-linear duration-225 hover:bg-white hover:text-home-link"
                        onClick={buttonClick}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default home;
