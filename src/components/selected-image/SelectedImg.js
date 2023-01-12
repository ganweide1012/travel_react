import React from "react";
import "./SelectedImg.css";

function SelectedImg(props) {
    return (
        <div className="select-location">
            <img src={props.bgImg} alt="/" />
            <div className="overlay">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default SelectedImg;