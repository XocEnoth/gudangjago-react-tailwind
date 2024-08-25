import React from "react";
import Head from "../component/head-title";
import Contact from "../component/contact-list";
import "bootstrap-icons/font/bootstrap-icons.css";

const contact = () => {
    const btnSend = () => {
        alert("Bagian ini sedang dalam maintenance oleh tim kami");
    };
    return (
        <>
            <div className="w-full flex justify-center bg-client-bg mt-20 pb-9">
                <div className="container px-120 pt-c60 pb-4">
                    <Head text="Contact" />
                    <p className="text-home-gray font-opensans leading-6 text-center mt-17">
                        Hubungi Kami di bawah ini
                    </p>
                    <div className="w-full flex justify-between mt-10">
                        <div className="w-415 flex items-center bg-white rounded-md">
                            <div className="w-400 px-5 py-7">
                                <Contact
                                    icon="bi bi-geo-alt"
                                    title="Location:"
                                    detail="Ruko Golden Madrid Blok D No. 26, Jl. Letnan Sutopo BSD sektor XIV, Tangerang Selatan 15310"
                                />
                                <Contact
                                    margin="my-10"
                                    icon="bi bi-envelope"
                                    title="Email:"
                                    detail="gudangjago@gmail.com"
                                    detail2="iqbal@gudangjago.com"
                                />
                                <Contact
                                    icon="bi bi-phone"
                                    title="Call:"
                                    detail="+62 87884254864"
                                />
                            </div>
                        </div>
                        <div className="w-856 bg-white rounded-md">
                            <div className="w-full p-5">
                                <div className="w-full flex justify-between">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="w-1/2 h-11 mr-3 px-3 py-1.5 outline-none placeholder:text-contact-input-place text-contact-input-text font-opensans text-sm ring-0.6 ring-inset ring-contact-input focus:ring-0.6 focus:ring-inset focus:ring-contact-input-focus"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        className="w-1/2 h-11 ml-3 px-3 py-1.5 outline-none placeholder:text-contact-input-place text-contact-input-text font-opensans text-sm ring-0.6 ring-inset ring-contact-input focus:ring-0.6 focus:ring-inset focus:ring-contact-input-focus"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="w-full h-11 px-3 py-1.5 mt-6 outline-none placeholder:text-contact-input-place text-contact-input-text font-opensans text-sm ring-0.6 ring-inset ring-contact-input focus:ring-0.6 focus:ring-inset focus:ring-contact-input-focus"
                                    placeholder="Subject"
                                />
                                <textarea
                                    name=""
                                    id=""
                                    className="w-full h-126 min-h-11 px-3 py-2.5 mt-6 outline-none placeholder:text-contact-input-place text-contact-input-text font-opensans text-sm ring-0.6 ring-inset ring-contact-input focus:ring-0.6 focus:ring-inset focus:ring-contact-input-focus"
                                    placeholder="Message"
                                ></textarea>
                                <div className="w-full flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="bg-contact-bg-button border-2 border-black font-opensans px-1.5 py-0.25"
                                        onClick={btnSend}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default contact;
