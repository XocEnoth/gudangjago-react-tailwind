import React from "react";
import Head from "../component/head-title";
import Img from "../component/client-png";

const client = () => {
    return (
        <>
            <div className="w-full flex justify-center bg-client-bg mt-4">
                <div className="container px-120 pt-4 pb-15">
                    <Head text="Client" />
                    <p className="text-home-gray font-opensans leading-6 text-center mt-17">
                        Keluarga yang percaya kepada kami
                    </p>
                    <div className="w-full flex flex-col justify-center mt-3">
                        <div className="w-full flex">
                            <Img src="garuda.png" />
                            <Img src="kemnaker.png" />
                            <Img src="mandiri.png" />
                            <Img src="perigi.png" />
                            <Img src="isc.png" />
                            <Img src="royal.png" />
                        </div>
                        <div className="w-full flex justify-center">
                            <Img src="tki.png" />
                            <Img src="tgi.png" />
                            <Img src="skk.png" />
                            <Img src="rex.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default client;
