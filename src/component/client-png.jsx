import React from "react";

function client(props) {
    return (
        <>
            <div className="w-220 px-3 flex justify-center items-center">
                <img
                    src={props.src}
                    alt=""
                    className="grayscale max-w-full max-h-full hover:grayscale-0 hover:scale-125 transition-all duration-600 ease-in-out py-15 w-98"
                />
            </div>
        </>
    );
}

export default client;
