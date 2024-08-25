import React from "react";

function servicesList(props) {
    return (
        <>
            <div className="flex mb-12">
                <i className="text-home-link text-5xl">
                    <i className={props.icon}></i>
                </i>
                <div className="">
                    <h4 className="text-about-text font-montserrat text-xl font-bold ml-3 mb-2">
                        {props.title}
                    </h4>
                    <p className="text-services-sub font-opensans text-15 leading-22.5 ml-3">
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    );
}

export default servicesList;
