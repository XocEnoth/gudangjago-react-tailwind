import React, { useState } from "react";
import Head from "../component/head-title";

const product = () => {
    const [activeLink, setActiveLink] = useState(1);

    const activeLinkProduct = (linkNumber) => {
        setActiveLink(linkNumber);
    };

    function ActiveImg() {
        if (activeLink === 1) {
            return (
                <>
                    <img
                        src="tps.svg"
                        alt=""
                        className="animate-opacityProduct"
                    />
                </>
            );
        } else if (activeLink === 2) {
            return (
                <>
                    <img
                        src="cross.svg"
                        alt=""
                        className="animate-opacityProduct"
                    />
                </>
            );
        } else if (activeLink === 3) {
            return (
                <>
                    <img
                        src="e-commerce.svg"
                        alt=""
                        className="animate-opacityProduct"
                    />
                </>
            );
        } else if (activeLink === 4) {
            return (
                <>
                    <img
                        src="mlm.svg"
                        alt=""
                        className="animate-opacityProduct"
                    />
                </>
            );
        } else if (activeLink === 5) {
            return (
                <>
                    <img
                        src="recruitment.svg"
                        alt=""
                        className="animate-opacityProduct"
                    />
                </>
            );
        } else {
            return (
                <>
                    <img
                        src="api.svg"
                        alt=""
                        className="animate-opacityProduct"
                    />
                </>
            );
        }
    }

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="container px-120 mt-16">
                    <Head text="Product" />
                    <p className="text-home-gray font-opensans leading-6 text-center mt-17">
                        Product yang telah kami buat
                    </p>
                    <div className="flex mt-11">
                        <div className="w-1/2 mr-3 h-636">
                            <ActiveImg />
                        </div>
                        <div className="w-1/2 ml-3">
                            <a
                                onClick={() => activeLinkProduct(1)}
                                className={`${
                                    activeLink === 1
                                        ? "shadow-activelinkproduct"
                                        : ""
                                } rounded-t-md px-5 pt-5 pb-7 block mb-2 group cursor-pointer ease-in-out duration-300`}
                            >
                                <h4
                                    className={`${
                                        activeLink === 1
                                            ? "text-navbar-hover"
                                            : "text-navbar-text"
                                    } font-montserrat text-lg font-semibold leading-5 group-hover:text-navbar-hover ease-linear duration-175`}
                                >
                                    TPS Online System
                                </h4>
                            </a>

                            <a
                                onClick={() => activeLinkProduct(2)}
                                className={`${
                                    activeLink === 2
                                        ? "shadow-activelinkproduct"
                                        : ""
                                } rounded-t-md px-5 pt-5 pb-7 block mb-2 group cursor-pointer ease-in-out duration-300`}
                            >
                                <h4
                                    className={`${
                                        activeLink === 2
                                            ? "text-navbar-hover"
                                            : "text-navbar-text"
                                    } font-montserrat text-lg font-semibold leading-5 group-hover:text-navbar-hover ease-linear duration-175`}
                                >
                                    Cross Border System
                                </h4>
                            </a>

                            <a
                                onClick={() => activeLinkProduct(3)}
                                className={`${
                                    activeLink === 3
                                        ? "shadow-activelinkproduct"
                                        : ""
                                } rounded-t-md px-5 pt-5 pb-7 block mb-2 group cursor-pointer ease-in-out duration-300`}
                            >
                                <h4
                                    className={`${
                                        activeLink === 3
                                            ? "text-navbar-hover"
                                            : "text-navbar-text"
                                    } font-montserrat text-lg font-semibold leading-5 group-hover:text-navbar-hover ease-linear duration-175`}
                                >
                                    E-Commerce
                                </h4>
                            </a>

                            <a
                                onClick={() => activeLinkProduct(4)}
                                className={`${
                                    activeLink === 4
                                        ? "shadow-activelinkproduct"
                                        : ""
                                } rounded-t-md px-5 pt-5 pb-7 block mb-2 group cursor-pointer ease-in-out duration-300`}
                            >
                                <h4
                                    className={`${
                                        activeLink === 4
                                            ? "text-navbar-hover"
                                            : "text-navbar-text"
                                    } font-montserrat text-lg font-semibold leading-5 group-hover:text-navbar-hover ease-linear duration-175`}
                                >
                                    MLM System
                                </h4>
                            </a>

                            <a
                                onClick={() => activeLinkProduct(5)}
                                className={`${
                                    activeLink === 5
                                        ? "shadow-activelinkproduct"
                                        : ""
                                } rounded-t-md px-5 pt-5 pb-7 block mb-2 group cursor-pointer ease-in-out duration-300`}
                            >
                                <h4
                                    className={`${
                                        activeLink === 5
                                            ? "text-navbar-hover"
                                            : "text-navbar-text"
                                    } font-montserrat text-lg font-semibold leading-5 group-hover:text-navbar-hover ease-linear duration-175`}
                                >
                                    Recruitment System
                                </h4>
                            </a>

                            <a
                                onClick={() => activeLinkProduct(6)}
                                className={`${
                                    activeLink === 6
                                        ? "shadow-activelinkproduct"
                                        : ""
                                } rounded-t-md px-5 pt-5 pb-7 block mb-2 group cursor-pointer ease-in-out duration-300`}
                            >
                                <h4
                                    className={`${
                                        activeLink === 6
                                            ? "text-navbar-hover"
                                            : "text-navbar-text"
                                    } font-montserrat text-lg font-semibold leading-5 group-hover:text-navbar-hover ease-linear duration-175`}
                                >
                                    API Build & Integration
                                </h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default product;
