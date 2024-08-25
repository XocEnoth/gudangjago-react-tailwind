import React from "react";
import Head from "../component/head-title";
import "boxicons/css/boxicons.min.css";

const about = () => {
    return (
        <>
            <div className="flex justify-center w-full">
                <div className="container flex justify-center px-120 mt-190">
                    <div className="">
                        <Head text="About Us" />
                        <div className="flex justify-center mt-14">
                            <div className="shadow-abouthero p-5 w-1/2 mr-3">
                                <img src="about.jpg" alt="" />
                            </div>
                            <div className="w-1/2 ml-3">
                                <h3 className="text-about-text font-montserrat leading-8 text-26 font-semibold mb-2">
                                    PT Gudang Jago Sejahtera
                                </h3>
                                <p className="text-about-text font-opensans text-base italic mb-4">
                                    PT Gudang Jago Sejahtera adalah perusahaan
                                    swasta nasional yang bergerak dalam bidang
                                    Teknologi Informasi, khususnya pada bidang
                                    pengembangan sistem informasi.
                                </p>
                                <p className="text-about-text font-opensans text-base mb-4">
                                    Melalui kemampuan teknis dan pengalaman
                                    kami, kami tidak hanya menyediakan jasa
                                    pengembangan sistem informasi saja, namun
                                    kami lebih menekankan pada solusi yang dapat
                                    kami berikan untuk kepuasan pelanggan. Mulai
                                    dari Analisa kebutuhan sistem, Desain sistem
                                    informasi, sampai dengan pengembangan dan
                                    support sistem.
                                </p>
                                <p className="text-about-text font-opensans text-base">
                                    Harga, waktu pelaksanaan, hasil dan juga
                                    kualitas terbaik merupakan sesuatu yang akan
                                    di dapatkan oleh pelanggan kami.
                                </p>
                            </div>
                        </div>
                        <div className="mt-120">
                            <i className="bx bxs-quote-alt-left text-home-link text-5xl"></i>
                            <h4 className="text-about-text font-montserrat text-2xl leading-28.8 font-medium text-center px-1 mb-2">
                                PT Gudang Jago Sejahtera menanamkan integritas
                                yang tinggi kepada semua personel karena dengan
                                integritas itulah perusahaan kami dapat
                                menjunjung tinggi moral dan etika serta
                                menyediakan jasa terbaik dengan standar
                                profesional.
                            </h4>
                            <i className="bx bxs-quote-alt-right text-home-link text-5xl float-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default about;
