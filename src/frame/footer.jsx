import React from "react";

const footer = () => {
    const btnSend = () => {
        alert("Bagian ini sedang dalam maintenance oleh tim kami");
    };
    return (
        <>
            <div className="w-full h-492 bg-footer bg-no-repeat bg-center">
                <div className="w-full h-492 bg-footer-shadow">
                    <div className="w-full flex justify-center">
                        <div className="container px-120">
                            <div className="w-full flex justify-center mt-20">
                                <a href="">
                                    <img
                                        src="hero-logo.png"
                                        alt=""
                                        width="58px"
                                    />
                                </a>
                            </div>
                            <h3 className="text-white font-poppins text-4xl font-bold text-center mt-30">
                                Gudang Jago Sejahtera
                            </h3>
                            <div className="w-full flex justify-center mt-30">
                                <div className="bg-white rounded-full py-1.5 px-2.5 w-636 h-42 flex items-center">
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter your Email"
                                        className="font-opensans text-15 text-black font-normal leading-22.5 px-2 py-1 w-516 placeholder:text-contact-input-place"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-contact-bg-button border rounded-sm border-black text-black font-opensans text-15 leading-22.5 px-1.5 py-px w-84 h-7"
                                        onClick={btnSend}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-20">
                        <div className="container px-120">
                            <p className="text-center text-white p-10 border-t-0.6 text-sm border-footer-border">
                                © Copyright{" "}
                                <strong>Gudang Jago Sejahtera</strong>. All
                                Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default footer;
