import React, { useState } from "react";
import NavLink from "../component/navbar-link";

const navbar = () => {
    const [isHomeVisible, setIsHomeVisible] = useState(false);

    const buttonClick = () => {
        setIsHomeVisible(false);
        window.scrollTo({ top: 15, behavior: "smooth" });
    };

    const navHome = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsHomeVisible(true);
    };

    const navAbout = () => {
        window.scrollTo({ top: 15, behavior: "smooth" });
    };

    const navServices = () => {
        window.scrollTo({ top: 1070, behavior: "smooth" });
    };

    const navProduct = () => {
        window.scrollTo({ top: 1810, behavior: "smooth" });
    };

    const navTeam = () => {
        window.scrollTo({ top: 2960, behavior: "smooth" });
    };

    const navContact = () => {
        window.scrollTo({ top: 3450, behavior: "smooth" });
    };

    return (
        <>
            <div
                className={`${
                    isHomeVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                } duration-500 ease-in-out w-full h-screen fixed z-50 bg-gradient-to-b from-home-top to-home-bottom flex items-center justify-center`}
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
            <div className="flex justify-center items-center w-full h-22 shadow-navbar fixed z-30 bg-white">
                <div className="container flex justify-between items-center h-42.5 px-120">
                    <a href="index.html">
                        <img src="logo.png" alt="" width="38.594px" />
                    </a>
                    <div className="">
                        <NavLink text="Home" onClick={navHome} />
                        <NavLink
                            text="About"
                            onClick={navAbout}
                            scrollTop="0"
                            scrollMin="0"
                            scrollMax="629"
                        />
                        <NavLink
                            text="Services"
                            onClick={navServices}
                            scrollMin="941"
                            scrollMax="1688"
                        />
                        <NavLink
                            text="Product"
                            onClick={navProduct}
                            scrollTop="1688"
                            scrollMin="1688"
                            scrollMax="2497"
                        />
                        <NavLink
                            text="Team"
                            onClick={navTeam}
                            scrollMin="2845"
                            scrollMax="3326"
                        />
                        <NavLink
                            text="Contact"
                            onClick={navContact}
                            scrollMin="3326"
                            scrollMax="9999"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default navbar;
