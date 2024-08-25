import React from "react";
import Head from "../component/head-title";
import Services from "../component/services-list";
import "boxicons/css/boxicons.min.css";

const services = () => {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="container px-120 mt-120">
                    <Head text="Services" />
                    <p className="text-home-gray font-opensans leading-6 text-center mt-17">
                        Kami menyediakan layanan
                    </p>
                    <div className="flex mt-11">
                        <div className="w-1/2 mr-3">
                            <Services
                                icon="bx bx-receipt"
                                title="IT CONSULTANT"
                                text="Memberikan layanan konsultasi perihal teknologi informasi untuk menunjang kebutuhan bisnis dalam mengembangkan inovasi secara tepat guna dan efisien."
                            />
                            <Services
                                icon="bx bx-cube-alt"
                                title="AI & IOT DEVELOPMENT"
                                text="Pengembangan sistem yang terintegrasi berbasis Artificial Intelegence & Internet of Things yang dapat membantu menganalisis dan membuat proses bisnis menjadi lebih terukur dan akurat berdasarkan basis data."
                            />
                            <Services
                                icon="bx bx-shield"
                                title="IT Support"
                                text="Menyediakan layanan untuk mendukung infrastruktur teknologi informasi agar dapat berjalan sebagaimana mestinya."
                            />
                            <Services
                                icon="bx bx-terminal"
                                title="Software Development"
                                text="Pengembangan sistem teknologi informasi yang dibutuhkan oleh suatu entitas secara tepat guna, efektif dan efisien secara berkelanjutan."
                            />
                        </div>
                        <div className="w-1/2 ml-3">
                            <Services
                                icon="bx bx-data"
                                title="Data Processing"
                                text="Sistem layanan pengolahan data untuk mempermuhan proses pengambilan keputusan."
                            />
                            <Services
                                icon="bx bx-hdd"
                                title="Hardware"
                                text="Menyediakan infrastruktur untuk mendukung sistem informasi yang dibutuhkan serta meningkatkan produktivitas secara efektif dan efisien."
                            />
                            <Services
                                icon="bx bx-candles"
                                title="Trading"
                                text="Kegiatan perdagangan terkait software maupun hardware."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default services;
