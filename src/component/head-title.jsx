import React from "react";

function title(props) {
    return (
        <>
            <h2 className="text-navbar-text font-montserrat text-32 font-bold leading-9 uppercase text-center">
                {props.text}
            </h2>
        </>
    );
}

export default title;
