import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function teamList(props) {
    return (
        <>
            <div className="w-56 group">
                <div className="relative flex justify-center">
                    <img src={props.src} alt="" width="181px" className="" />
                    <div className="absolute bg-team-social w-56 h-10 flex justify-center items-center -bottom-10 group-hover:-bottom-0 left-0 opacity-0 rounded-b-5 group-hover:opacity-100 transition-bottom ease-linear duration-300">
                        <a href="" className="mx-3">
                            <i className="bi bi-twitter text-team-icon text-lg hover:text-white ease-in-out duration-225"></i>
                        </a>
                        <a href="" className="mx-3">
                            <i className="bi bi-facebook text-team-icon text-lg hover:text-white ease-in-out duration-225"></i>
                        </a>
                        <a href="" className="mx-3">
                            <i className="bi bi-instagram text-team-icon text-lg hover:text-white ease-in-out duration-225"></i>
                        </a>
                        <a href="" className="mx-3">
                            <i className="bi bi-linkedin text-team-icon text-lg hover:text-white ease-in-out duration-225"></i>
                        </a>
                    </div>
                </div>
                <h4 className="text-about-text bg-white font-montserrat text-lg leading-5 font-bold text-center pt-15 pb-1.5 relative z-10">
                    {props.nama}
                </h4>
                <p className="text-home-link font-opensans text-13 font-normal leading-5 uppercase text-center">
                    {props.list}
                </p>
            </div>
        </>
    );
}

export default teamList;
