import React from "react";

function contactList(props) {
    return (
        <>
            <div className={`${props.margin} w-full group`}>
                <i className="w-11 h-11 bg-contact-bg-icons rounded-full text-navbar-hover flex float-left text-xl justify-center items-center group-hover:text-white group-hover:bg-navbar-hover ease-in-out duration-450">
                    <i className={props.icon}></i>
                </i>
                <h4 className="text-navbar-text font-montserrat text-22 font-semibold leading-26 pl-c60 mb-lima">
                    {props.title}
                </h4>
                <p className="text-contact-text font-opensans text-sm font-normal pl-c60">
                    {props.detail}
                </p>
                <p className="text-contact-text font-opensans text-sm font-normal pl-c60">
                    {props.detail2}
                </p>
            </div>
        </>
    );
}

export default contactList;
